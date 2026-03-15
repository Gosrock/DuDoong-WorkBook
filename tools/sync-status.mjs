/**
 * DuDoong WorkBook Sync Status
 *
 * tasks/ 폴더의 frontmatter를 파싱해서 진행 현황을 출력합니다.
 *
 * Usage: node tools/sync-status.mjs
 */
import { readdirSync, readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TASKS_DIR = resolve(__dirname, '../tasks');

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm = {};
  for (const line of match[1].split('\n')) {
    const [key, ...rest] = line.split(':');
    if (key && rest.length) {
      const val = rest.join(':').trim();
      fm[key.trim()] = val;
    }
  }
  return fm;
}

function parsePartsBlock(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const parts = {};
  let inParts = false;
  for (const line of match[1].split('\n')) {
    if (line.trim() === 'parts:') { inParts = true; continue; }
    if (inParts) {
      const m = line.match(/^\s{2}(\w+):\s*(.+)/);
      if (m) {
        parts[m[1]] = m[2].trim();
      } else {
        inParts = false;
      }
    }
  }
  return parts;
}

const files = readdirSync(TASKS_DIR).filter(f => f.endsWith('.md'));
const tasks = files.map(f => {
  const content = readFileSync(resolve(TASKS_DIR, f), 'utf-8');
  const fm = parseFrontmatter(content);
  const parts = parsePartsBlock(content);
  return { file: f, ...fm, parts };
});

// --- Summary by Epic ---
const epics = {};
for (const t of tasks) {
  const ep = t.epic || 'unknown';
  if (!epics[ep]) epics[ep] = [];
  epics[ep].push(t);
}

const STATUS_ICON = {
  'todo': '🔴',
  'in-progress': '🟡',
  'review': '🔵',
  'done': '🟢',
  'n/a': '⚪',
};

console.log('╔══════════════════════════════════════════════╗');
console.log('║        DuDoong WorkBook Sync Status          ║');
console.log(`║        ${new Date().toISOString().slice(0, 10)}                           ║`);
console.log('╚══════════════════════════════════════════════╝\n');

// Overall counts
const counts = { todo: 0, 'in-progress': 0, review: 0, done: 0 };
tasks.forEach(t => { if (counts[t.status] !== undefined) counts[t.status]++; });
console.log(`전체: ${tasks.length}건  🔴 ${counts.todo} todo  🟡 ${counts['in-progress']} wip  🔵 ${counts.review} review  🟢 ${counts.done} done\n`);

// By Epic
for (const [ep, epTasks] of Object.entries(epics).sort()) {
  console.log(`━━━ ${ep} ━━━`);
  for (const t of epTasks) {
    const icon = STATUS_ICON[t.status] || '❓';
    const parts = t.parts;
    const partStr = ['design', 'backend', 'frontend']
      .map(p => {
        const s = parts[p] || 'n/a';
        return `${p[0].toUpperCase()}:${STATUS_ICON[s] || s}`;
      })
      .join(' ');
    console.log(`  ${icon} [${t.priority || '-'}] ${t.id} ${t.title}`);
    console.log(`     ${partStr}`);
  }
  console.log('');
}

// Blockers: design not done but frontend todo
console.log('━━━ 블로커 체크 ━━━');
let blockers = 0;
for (const t of tasks) {
  const d = t.parts.design;
  const f = t.parts.frontend;
  if (d && d !== 'done' && d !== 'n/a' && f === 'todo') {
    console.log(`  ⚠️  ${t.id}: FE 대기 중 (Design: ${d})`);
    blockers++;
  }
}
if (blockers === 0) console.log('  ✅ 블로커 없음');

console.log('\n━━━ 다음 액션 ━━━');
const p0 = tasks.filter(t => t.priority === 'P0' && t.status !== 'done');
if (p0.length) {
  console.log('  P0 미완료:');
  p0.forEach(t => console.log(`    → ${t.id} ${t.title}`));
}
const decisions = tasks.filter(t => t.title && t.title.includes('정책'));
if (decisions.length) {
  console.log('  의사결정 필요:');
  decisions.forEach(t => console.log(`    → ${t.id} ${t.title}`));
}
