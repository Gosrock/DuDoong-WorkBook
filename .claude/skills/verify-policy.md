---
name: verify-policy
description: 정책 문서 vs 코드베이스 검증 (enum, drift, exception 체크)
triggers:
  - 정책 검증
  - policy verify
  - 할루시네이션 체크
  - 문서 검증
argument-hint: "[domain] [--report]"
---

# 정책 검증 Skill

## Purpose
WorkBook 정책 문서가 실제 코드베이스와 일치하는지 자동 검증한다.

## When to Activate
- 유저가 "정책 검증해줘", "문서 맞는지 확인해줘", "할루시네이션 없는지 체크" 등을 요청할 때
- 정책 문서를 수정한 후 검증이 필요할 때
- 코드 변경 후 정책 drift 확인이 필요할 때

## Workflow

1. WorkBook 디렉토리로 이동
2. `node tools/verify-policies.mjs --report` 실행
3. 결과를 분석하여 유저에게 보고:
   - ✅ 통과 항목 수
   - ⚠️ 경고 (enum 미발견, drift 등)
   - ❌ 불일치 (코드에 있지만 정책에 없는 값)
4. 불일치 항목이 있으면 정책 문서 수정 제안
5. `--report` 플래그로 sync/ 폴더에 리포트 저장

## Examples

```
유저: 정책 검증해줘
→ cd DuDoong-WorkBook && node tools/verify-policies.mjs --report

유저: order 도메인만 검증해
→ cd DuDoong-WorkBook && node tools/verify-policies.mjs order

유저: 할루시네이션 없는지 확인
→ cd DuDoong-WorkBook && node tools/verify-policies.mjs --report
```

## Notes
- 스크립트 위치: `DuDoong-WorkBook/tools/verify-policies.mjs`
- 매핑 설정: `DuDoong-WorkBook/tools/policy-map.json`
- 리포트 저장: `DuDoong-WorkBook/sync/verify-{date}.md`
- build/ 디렉토리는 자동 제외됨
