# DuDoong WorkBook

## 보안 규칙

- **절대 개인정보, 시크릿 키, 비밀번호, API 토큰 등을 이 리포지토리에 포함하지 말 것**
- 이 리포지토리는 GitHub에 공개되어 있음
- 유저 데이터, 이메일, 전화번호, 실명 등 PII 절대 금지
- 예시 데이터가 필요할 경우 가상 데이터 사용

## 프로젝트 개요

두둥(DuDoong) 티켓 예매 서비스의 **운영 워크북 + PM 허브**.
PM/PO 없이 디자이너+개발자 팀이 운영하며, Claude가 PM 역할을 대행한다.

- **서비스**: https://dudoong.com
- **GitHub Org**: https://github.com/Gosrock
- **백엔드**: DuDoong-Backend (Java → Kotlin 마이그레이션 중)
- **프론트**: DuDoong-Front (Next.js)
- **Figma**: https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업
  - 주요 페이지: `v0.9` (page id: `10:3`)
  - Figma 링크 패턴: `?node-id={ID에서 콜론을 하이픈으로}&m=dev`

## 작업 원칙: WorkBook First + 이슈 기반

**어떤 작업이든 WorkBook에서 시작하고, 이슈(티켓) 기반으로 작업한다.**

1. 작업 요청 받으면 → 먼저 WorkBook 확인 (ROADMAP, epics, tasks, admin/)
2. 관련 컨텍스트 파악 (이슈, 에픽 상태, 의사결정 이력)
3. **GitHub 이슈 없으면 먼저 생성** → 이슈 번호 기반으로 작업
4. PR에 `close #이슈번호` 포함 → 머지 시 자동 close
5. 작업 완료 후 → WorkBook에 결과 반영 (상태 업데이트, changelog, 의사결정 기록)

이슈 없는 코드 변경은 하지 않는다. 사소한 수정이라도 이슈 먼저.
이슈는 **작업이 수행되는 리포**에 생성한다 (Backend 작업 → Backend 리포, WorkBook 작업 → WorkBook 리포).

## 역할 (Claude as PM)

Claude는 이 리포지토리에서 PM/PO 역할을 수행한다:
- 에픽/태스크 관리 (epics/, tasks/)
- 진행상황 추적 (`node tools/sync-status.mjs`)
- 의사결정 기록 (decisions/)
- 도메인 정책 문서 관리 (domain/)
- Notion 이슈 → WorkBook 태스크 변환

## 디렉토리 구조

```
DuDoong-WorkBook/
├── ROADMAP.md          # OKR + 에픽 + 스프린트 계획
├── epics/              # 에픽 단위 (큰 작업 묶음)
├── tasks/              # 에픽 하위 개별 태스크 (D/B/F 파트별 추적)
├── decisions/          # 의사결정 로그
├── templates/          # 태스크 템플릿
├── admin/              # 어드민 대시보드 기획/설계/추적 (PRD, API spec, decisions, UI)
├── sync/               # 주간 싱크 로그
├── domain/             # 도메인별 정책 + UseCase 시나리오
├── flow/               # 사용자 플로우 + Figma 화면 맵 + 네비게이션 + 디자인 시스템
├── overview/           # 서비스 전체 개요
├── infra/              # 인프라/배포
├── ops/                # 운영
├── public-notion/      # 노션 퍼블릭 가이드 (크롤링)
└── tools/              # CLI 도구
    ├── sync-status.mjs   # 진행상황 대시보드
    └── notion-reader.mjs # Notion 페이지 리더 (Playwright)
```

## 작업 규칙

### 태스크 관리
- 태스크 파일은 `tasks/` 폴더에 `{에픽ID}-{태스크ID}-{제목}.md` 형식
- 각 태스크는 design/backend/frontend 파트별 독립 상태 추적
- 상태값: `todo` | `in-progress` | `review` | `done` | `n/a`
- 새 태스크는 `templates/task-template.md` 복사해서 생성

### 현황 체크
- `node tools/sync-status.mjs` 실행하면 전체 진행상황 + 블로커 + 다음 액션 출력
- 디자인 미완료 → 프론트 대기 같은 블로커 자동 감지

### 의사결정
- 정책/기획 결정은 `decisions/README.md`에 기록
- 결정의 맥락(왜)과 대안(뭘 안 했는지)을 반드시 포함

### Notion 연동
- Notion 페이지 읽기: `node tools/notion-reader.mjs <url>`
- 첫 실행 시 브라우저 로그인 필요 (세션 자동 저장)
- `notion-auth.json`은 .gitignore 처리됨

### Figma 디자인 싱크
- Figma MCP (`mcp__figma-desktop__*`)로 디자인 화면 접근 가능
- 디자인 싱크 리포트: `sync/design-sync-{날짜}.md`
- 화면 인벤토리 + 에픽 매핑: `flow/figma-screen-map.md`
- 네비게이션 구조: `flow/앱-네비게이션-구조.md`
- 디자인 시스템 컴포넌트: `flow/디자인-시스템-컴포넌트.md`
- Figma ID는 반드시 클릭 가능한 링크로 작성 (디자이너가 바로 이동 가능하게)
  - 예: `[215:2902](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=215-2902&m=dev)`
- 태스크 파일에 `## Figma 연결` 섹션으로 관련 화면 연결
- 디자이너 요청은 GitHub 이슈로 생성 (WorkBook 리포에)

### 문서 작성 원칙
- 개발자가 아닌 사람도 이해할 수 있는 자연어로 작성
- 코드 복사가 아닌 "왜 이런 규칙인지" 맥락 포함
- 에러 → 원인 → 대응 매핑 형태로 운영 가이드 작성

## 커밋 컨벤션

- `feat:` 새 문서/기능 추가
- `docs:` 기존 문서 수정/보완
- `fix:` 오류 수정
- `chore:` 도구/설정 변경
