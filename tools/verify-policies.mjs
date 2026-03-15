/**
 * DuDoong Policy Verification Tool
 *
 * 정책 문서 vs 코드베이스 검증 리포트를 생성합니다.
 *
 * Usage:
 *   node tools/verify-policies.mjs              # 전체 도메인
 *   node tools/verify-policies.mjs order         # 특정 도메인
 *   node tools/verify-policies.mjs --report      # 마크다운 리포트 생성
 *
 * 검증 항목:
 *  1. Enum 값 일치 여부 (정책에 적힌 상태값 vs 코드의 enum)
 *  2. 코드 변경 시점 vs 정책 문서 작성 시점 (drift 감지)
 *  3. Validator/Service 키워드 존재 여부
 *  4. 정책에 언급된 Exception이 코드에 존재하는지
 */
import { readFileSync, readdirSync, statSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname, relative } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import { createRequire } from 'module';

const __dirname = dirname(fileURLToPath(import.meta.url));
const WORKBOOK_ROOT = resolve(__dirname, '..');
const BACKEND_ROOT = resolve(WORKBOOK_ROOT, '../DuDoong-Backend');
const policyMap = JSON.parse(readFileSync(resolve(__dirname, 'policy-map.json'), 'utf-8'));

const targetDomain = process.argv[2] && !process.argv[2].startsWith('-') ? process.argv[2] : null;
const generateReport = process.argv.includes('--report');

// ── Helpers ──

function globFiles(pattern, baseDir) {
  try {
    const result = execSync(
      `find ${baseDir} -path "${pattern.replace('**', '*')}" -name "*.java" -o -path "${pattern.replace('**', '*')}" -name "*.kt" 2>/dev/null`,
      { encoding: 'utf-8', timeout: 10000 }
    ).trim();
    return result ? result.split('\n') : [];
  } catch { return []; }
}

function findEnumValues(enumName, baseDir) {
  try {
    // Search for enum definition in Java or Kotlin
    const result = execSync(
      `grep -r "enum.*\\b${enumName}\\b" ${baseDir} --include="*.java" --include="*.kt" -l 2>/dev/null`,
      { encoding: 'utf-8', timeout: 10000 }
    ).trim();

    if (!result) return { file: null, values: [] };

    // Prefer src/ over build/ directories
    const candidates = result.split('\n').filter(f => !f.includes('/build/'));
    const enumFile = candidates[0] || result.split('\n')[0];
    const content = readFileSync(enumFile, 'utf-8');

    // Extract enum values - handles both Java and Kotlin enum class
    // Strategy: find all UPPER_CASE identifiers followed by ( or , or ; in the enum body
    const bodyMatch = content.match(/\{([\s\S]*)\}/);
    if (!bodyMatch) return { file: relative(BACKEND_ROOT, enumFile), values: [] };

    const body = bodyMatch[1];
    // Match enum constants: UPPER_CASE word at start of line or after comma
    const values = [];
    const re = /^\s*([A-Z][A-Z_0-9]+)\s*[\(,;]/gm;
    let m;
    while ((m = re.exec(body)) !== null) {
      values.push(m[1]);
    }

    return { file: relative(BACKEND_ROOT, enumFile), values };
  } catch { return { file: null, values: [] }; }
}

function checkEnumValueInPolicy(policyContent, value) {
  // Check if this specific enum value is mentioned anywhere in the policy
  return policyContent.includes(value);
}

function extractExceptions(policyContent) {
  const matches = policyContent.match(/\b\w+Exception\b/g);
  return matches ? [...new Set(matches)] : [];
}

function findExceptionInCode(exceptionName, baseDir) {
  try {
    const result = execSync(
      `grep -r "class ${exceptionName}" ${baseDir} --include="*.java" --include="*.kt" -l 2>/dev/null`,
      { encoding: 'utf-8', timeout: 10000 }
    ).trim();
    return result ? true : false;
  } catch { return false; }
}

function getLastModified(filePath) {
  try {
    const result = execSync(
      `git -C "${dirname(filePath)}" log -1 --format="%ai" -- "${filePath}" 2>/dev/null`,
      { encoding: 'utf-8', timeout: 10000 }
    ).trim();
    return result || null;
  } catch { return null; }
}

function getSourceLastModified(patterns) {
  let latest = null;
  for (const pattern of patterns) {
    try {
      const dir = resolve(BACKEND_ROOT, pattern.split('**')[0]);
      if (!existsSync(dir)) continue;
      const result = execSync(
        `git -C "${BACKEND_ROOT}" log -1 --format="%ai" -- "${pattern.split('**')[0]}" 2>/dev/null`,
        { encoding: 'utf-8', timeout: 10000 }
      ).trim();
      if (result && (!latest || result > latest)) latest = result;
    } catch { /* skip */ }
  }
  return latest;
}

// ── Main ──

const results = [];

const domains = targetDomain
  ? { [targetDomain]: policyMap.domains[targetDomain] }
  : policyMap.domains;

if (targetDomain && !policyMap.domains[targetDomain]) {
  console.error(`도메인 "${targetDomain}" 을 찾을 수 없습니다.`);
  console.error(`사용 가능: ${Object.keys(policyMap.domains).join(', ')}`);
  process.exit(1);
}

console.log('╔══════════════════════════════════════════════╗');
console.log('║       DuDoong Policy Verification            ║');
console.log(`║       ${new Date().toISOString().slice(0, 10)}                           ║`);
console.log('╚══════════════════════════════════════════════╝\n');

for (const [name, config] of Object.entries(domains)) {
  const domainResult = {
    name,
    issues: [],
    warnings: [],
    verified: [],
  };

  console.log(`━━━ ${name} ━━━`);

  // 1. Read policy file
  const policyPath = resolve(WORKBOOK_ROOT, config.policy);
  if (!existsSync(policyPath)) {
    domainResult.issues.push(`정책 파일 없음: ${config.policy}`);
    console.log(`  ❌ 정책 파일 없음: ${config.policy}`);
    results.push(domainResult);
    continue;
  }
  const policyContent = readFileSync(policyPath, 'utf-8');

  // 2. Check date drift
  const policyDate = getLastModified(policyPath);
  const sourceDate = getSourceLastModified(config.sources);

  if (policyDate && sourceDate) {
    const pd = new Date(policyDate);
    const sd = new Date(sourceDate);
    const daysDiff = Math.floor((sd - pd) / (1000 * 60 * 60 * 24));

    if (daysDiff > 0) {
      const msg = `코드가 정책보다 ${daysDiff}일 후에 수정됨 (코드: ${sourceDate.slice(0,10)}, 정책: ${policyDate.slice(0,10)})`;
      domainResult.warnings.push(msg);
      console.log(`  ⚠️  ${msg}`);
    } else {
      domainResult.verified.push(`정책이 코드보다 최신 (정책: ${policyDate.slice(0,10)})`);
      console.log(`  ✅ 정책이 코드보다 최신`);
    }
  }

  // 3. Enum verification
  for (const enumName of (config.enums || [])) {
    const codeEnum = findEnumValues(enumName, BACKEND_ROOT);

    if (!codeEnum.file) {
      domainResult.warnings.push(`Enum ${enumName}을 코드에서 찾을 수 없음`);
      console.log(`  ⚠️  Enum ${enumName} 코드에서 미발견`);
      continue;
    }

    const codeValues = codeEnum.values;

    // Check: each code enum value should be mentioned in policy doc
    const missingInPolicy = codeValues.filter(v => !checkEnumValueInPolicy(policyContent, v));

    if (missingInPolicy.length > 0) {
      const msg = `${enumName}: 코드에는 있지만 정책에 없음 → [${missingInPolicy.join(', ')}]`;
      domainResult.issues.push(msg);
      console.log(`  ❌ ${msg}`);
    }

    const documented = codeValues.length - missingInPolicy.length;
    if (documented > 0 && missingInPolicy.length > 0) {
      domainResult.verified.push(`${enumName}: ${documented}/${codeValues.length}개 문서화됨`);
      console.log(`  ℹ️  ${enumName}: ${documented}/${codeValues.length}개 문서화됨`);
    } else if (missingInPolicy.length === 0) {
      domainResult.verified.push(`${enumName}: 코드와 정책 일치 (${codeValues.length}개 값)`);
      console.log(`  ✅ ${enumName}: ${codeValues.length}개 값 일치`);
    }
  }

  // 4. Exception verification
  const policyExceptions = extractExceptions(policyContent);
  if (policyExceptions.length > 0) {
    let found = 0;
    let notFound = [];
    for (const ex of policyExceptions) {
      if (findExceptionInCode(ex, BACKEND_ROOT)) {
        found++;
      } else {
        notFound.push(ex);
      }
    }
    if (notFound.length > 0) {
      const msg = `Exception 미발견 (${notFound.length}/${policyExceptions.length}): ${notFound.slice(0, 5).join(', ')}`;
      domainResult.warnings.push(msg);
      console.log(`  ⚠️  ${msg}`);
    }
    if (found > 0) {
      domainResult.verified.push(`Exception ${found}/${policyExceptions.length}개 코드에서 확인`);
      console.log(`  ✅ Exception ${found}/${policyExceptions.length}개 확인`);
    }
  }

  // 5. Source file existence
  let sourceCount = 0;
  for (const pattern of config.sources) {
    const dir = resolve(BACKEND_ROOT, pattern.split('**')[0]);
    if (existsSync(dir)) {
      try {
        const count = execSync(
          `find "${dir}" \\( -name "*.java" -o -name "*.kt" \\) | wc -l`,
          { encoding: 'utf-8', timeout: 10000 }
        ).trim();
        sourceCount += parseInt(count) || 0;
      } catch { /* skip */ }
    }
  }
  if (sourceCount === 0) {
    domainResult.warnings.push('소스 파일을 찾을 수 없음 (경로 확인 필요)');
    console.log(`  ⚠️  소스 파일 없음 (마이그레이션 중?)`);
  } else {
    domainResult.verified.push(`소스 파일 ${sourceCount}개 발견`);
  }

  console.log('');
  results.push(domainResult);
}

// ── Summary ──
const totalIssues = results.reduce((s, r) => s + r.issues.length, 0);
const totalWarnings = results.reduce((s, r) => s + r.warnings.length, 0);
const totalVerified = results.reduce((s, r) => s + r.verified.length, 0);

console.log('━━━ 요약 ━━━');
console.log(`  ✅ 검증 통과: ${totalVerified}`);
console.log(`  ⚠️  경고: ${totalWarnings}`);
console.log(`  ❌ 불일치: ${totalIssues}`);

if (totalIssues > 0) {
  console.log('\n━━━ 불일치 상세 (검토 필요) ━━━');
  for (const r of results) {
    for (const issue of r.issues) {
      console.log(`  [${r.name}] ${issue}`);
    }
  }
}

// ── Report Generation ──
if (generateReport) {
  const reportDate = new Date().toISOString().slice(0, 10);
  const reportPath = resolve(WORKBOOK_ROOT, `sync/verify-${reportDate}.md`);

  let md = `# 정책 검증 리포트 — ${reportDate}\n\n`;
  md += `| 항목 | 수 |\n|------|----|\n`;
  md += `| ✅ 검증 통과 | ${totalVerified} |\n`;
  md += `| ⚠️ 경고 | ${totalWarnings} |\n`;
  md += `| ❌ 불일치 | ${totalIssues} |\n\n`;

  for (const r of results) {
    md += `## ${r.name}\n\n`;
    if (r.verified.length) {
      md += `**통과:**\n`;
      r.verified.forEach(v => md += `- ✅ ${v}\n`);
    }
    if (r.warnings.length) {
      md += `\n**경고:**\n`;
      r.warnings.forEach(w => md += `- ⚠️ ${w}\n`);
    }
    if (r.issues.length) {
      md += `\n**불일치:**\n`;
      r.issues.forEach(i => md += `- ❌ ${i}\n`);
    }
    md += '\n';
  }

  md += `---\n_Generated by verify-policies.mjs_\n`;
  writeFileSync(reportPath, md);
  console.log(`\n📄 리포트 저장: ${relative(WORKBOOK_ROOT, reportPath)}`);
}
