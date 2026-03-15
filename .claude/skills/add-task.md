---
name: add-task
description: 새 태스크를 템플릿 기반으로 생성
triggers:
  - 새 이슈
  - 태스크 추가
  - 버그 추가
  - add task
argument-hint: "<제목>"
---

# Add Task Skill

## Purpose
`templates/task-template.md`를 기반으로 새 태스크 파일을 생성하고, `tasks/` 폴더에 저장한다.

## When to Activate
- 유저가 "새 이슈 추가해줘", "태스크 만들어줘", "버그 기록해줘", "add task" 등을 요청할 때
- Notion 이슈를 WorkBook 태스크로 변환할 때
- 스프린트 계획 중 신규 태스크를 등록할 때

## Workflow

1. **정보 수집**: 유저에게 다음을 확인한다
   - 에픽: EP01 (예매플로우 개선) / EP02 (호스트등록 리팩토링) / EP03 (티켓UI 개선) / 새 에픽
   - 제목 (한국어 짧은 명사구 권장)
   - 우선순위: P0 (즉시) / P1 (이번 스프린트) / P2 (다음 스프린트) / P3 (백로그)
   - 유형: bug / feature / improvement / chore
   - 파트별 해당 여부: 디자인 필요 여부, 백엔드 필요 여부, 프론트엔드 필요 여부

2. **태스크 ID 결정**: `tasks/` 폴더의 기존 파일을 확인해서 다음 번호 할당
   - 파일명 형식: `{에픽ID}-T{번호두자리}-{제목슬러그}.md`
   - 예: `EP01-T09-결제실패-메시지개선.md`

3. **파일 생성**: `templates/task-template.md`를 복사해서 frontmatter 채우기
   ```yaml
   epic: EP__
   id: T__
   title: (제목)
   status: todo
   priority: P_
   type: (bug/feature/improvement/chore)
   parts:
     design: todo   # 해당 없으면 n/a
     backend: todo  # 해당 없으면 n/a
     frontend: todo # 해당 없으면 n/a
   assignee:
     design: ""
     backend: ""
     frontend: ""
   created: (오늘 날짜 YYYY-MM-DD)
   updated: (오늘 날짜 YYYY-MM-DD)
   ```

4. **섹션 채우기**:
   - `## 설명`: 무엇이 문제인지 / 무엇을 만드는지 1-3문장
   - `## 경로`: 해당 화면/API 경로 (알면)
   - `## 작업 내용`: 파트별 구체적 할 일 체크리스트
   - `## 수락 기준`: pass/fail로 판단 가능한 기준 2-4개
   - `## 의존성`: 선행 태스크 있으면 기재
   - `## 참고`: 관련 이슈, Notion 링크 등

5. **저장 및 확인**: `tasks/` 폴더에 파일 저장 후 `node tools/sync-status.mjs` 실행해서 태스크가 대시보드에 반영됐는지 확인

## Examples

```
유저: 결제 실패 시 에러 메시지가 너무 기술적이야. 태스크 추가해줘
→ 에픽(EP01), 제목("결제실패-메시지개선"), 우선순위(P1), 유형(improvement), 파트(FE만) 확인 후 생성

유저: 새 이슈 - 호스트 초대 시 이메일 중복 체크 안 됨
→ 에픽(EP02), 제목("호스트초대-이메일중복체크"), 유형(bug), 파트(BE+FE) 확인 후 생성
```

## Notes
- 태스크 파일 위치: `DuDoong-WorkBook/tasks/`
- 템플릿 위치: `DuDoong-WorkBook/templates/task-template.md`
- 현황 확인: `node tools/sync-status.mjs` (DuDoong-WorkBook 디렉토리에서 실행)
- 파트 해당 없으면 `n/a` 처리 (예: 백엔드만 있는 태스크는 design: n/a, frontend: n/a)
