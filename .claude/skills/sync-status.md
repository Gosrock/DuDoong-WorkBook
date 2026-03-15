---
name: sync-status
description: DuDoong 2.0 에픽/태스크 진행 현황 대시보드
triggers:
  - 현황
  - 진행상황
  - sync
  - 블로커
  - 다음 할 일
argument-hint: ""
---

# Sync Status Skill

## Purpose
에픽/태스크 진행 현황을 파트별(디자인/백엔드/프론트)로 집계하고 블로커를 감지한다.

## When to Activate
- 유저가 "현황 알려줘", "진행상황", "지금 뭐해야해", "블로커 있어?" 등을 요청할 때
- 스프린트 시작/종료 시점에 상태 점검할 때
- 주간 싱크 미팅 전 현황 파악할 때

## Workflow

1. WorkBook 디렉토리로 이동
2. `node tools/sync-status.mjs` 실행
3. 결과를 유저에게 보고:
   - 전체 진행률 (todo/wip/review/done)
   - 에픽별 태스크 상태
   - 파트별 상태 (D: 디자인, B: 백엔드, F: 프론트)
   - 블로커 목록 (디자인 미완료 → 프론트 대기 등)
   - P0 미완료 및 의사결정 필요 항목
4. 필요시 태스크 상태 업데이트 제안

## Examples

```
유저: 현황 알려줘
→ cd DuDoong-WorkBook && node tools/sync-status.mjs

유저: 블로커 있어?
→ cd DuDoong-WorkBook && node tools/sync-status.mjs (블로커 섹션 집중 보고)

유저: T02 백엔드 시작했어
→ tasks/EP01-T02-매진티켓-구매차단.md 에서 backend: in-progress로 수정 후 sync 재실행
```

## Notes
- 스크립트 위치: `DuDoong-WorkBook/tools/sync-status.mjs`
- 태스크 파일: `DuDoong-WorkBook/tasks/*.md` (frontmatter 파싱)
- 태스크 상태 변경: 해당 .md 파일의 frontmatter 직접 수정
- 템플릿: `DuDoong-WorkBook/templates/task-template.md`
