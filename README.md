# DuDoong WorkBook

두둥 티켓 예매 서비스의 정책/운영 워크북입니다.
PM/PO 없이 디자이너+개발자 팀이 운영하는 서비스의 기획 문서 역할을 합니다.

> **서비스 URL**: https://dudoong.com/home
> **GitHub**: https://github.com/Gosrock
> **노션 가이드**: https://dudoong.notion.site/c4999331a2aa47299e1c6821a7dee9af

---

## 구조

```
DuDoong-WorkBook/
├── ROADMAP.md                   # OKR + 에픽 + 스프린트 계획
│
├── epics/                       # 에픽 단위 작업 묶음
│   ├── EP01-예매플로우-개선.md
│   ├── EP02-호스트등록-리팩토링.md
│   └── EP03-티켓UI-개선.md
│
├── tasks/                       # 개별 태스크 (D/B/F 파트별 추적)
│   ├── EP01-T01-거절티켓-상태오표기.md
│   ├── EP01-T02-매진티켓-구매차단.md
│   ├── EP01-T03-에러시-네비게이션.md
│   ├── EP02-T04-저장버튼-disabled.md
│   ├── EP02-T05-주소찾기-덮어쓰기.md
│   ├── EP02-T06-기본정보-수정정책.md
│   ├── EP02-T07-UX라이팅-알겠어요.md
│   └── EP03-T08-티켓-매수순번-UI.md
│
├── decisions/                   # 의사결정 로그
│   └── README.md                # DEC-NNN 형식 결정 기록
│
├── templates/                   # 태스크 템플릿
│   └── task-template.md
│
├── sync/                        # 검증 리포트 / 주간 싱크 로그
│   └── verify-2026-03-15.md
│
├── overview/                    # 서비스 전체 개요
│   ├── 서비스-개요.md             # 소개, 통계, 기술 스택, 팀 구성
│   └── 엔티티-관계도.md           # DDD Aggregate, DDL
│
├── domain/                      # 도메인별 정책 + UseCase 시나리오
│   ├── event/                   # 공연/이벤트
│   │   ├── 정책.md               # 상태 머신, 생성/수정/삭제 규칙
│   │   └── 시나리오.md            # UseCase별 정상/예외 플로우
│   ├── order/                   # 주문/결제
│   │   ├── 정책.md               # 상태 머신, 결제 방식, 취소/환불
│   │   └── 시나리오.md            # 유료/무료/두둥 주문 시나리오
│   ├── ticket/                  # 티켓 (상품 + 발급 + 옵션)
│   │   ├── 정책.md               # 티켓 유형, 재고, QR 입장, 옵션
│   │   └── 시나리오.md            # 티켓 생성, QR 처리 시나리오
│   ├── host/                    # 호스트 (주최자)
│   │   ├── 정책.md               # 역할, 멤버 관리, 제휴, Slack
│   │   └── 시나리오.md            # 생성, 초대, 권한 시나리오
│   ├── user/                    # 유저/인증
│   │   ├── 정책.md               # OAuth, JWT, 탈퇴, 인가
│   │   └── 시나리오.md            # 가입, 로그인, 탈퇴 시나리오
│   ├── cart/                    # 장바구니
│   │   └── 정책.md               # 생성 검증, 덮어쓰기 규칙
│   ├── coupon/                  # 쿠폰
│   │   └── 정책.md               # 할인 유형, 발급/사용/복구
│   ├── settlement/              # 정산
│   │   └── 정책.md               # 정산 프로세스, 금액 계산
│   └── comment/                 # 댓글
│       └── 정책.md               # 작성/삭제 규칙
│
├── flow/                        # 사용자 플로우
│   ├── 관객-예매-플로우.md        # 관객: 로그인 → 예매 → QR 입장
│   └── 호스트-관리-플로우.md      # 호스트: 생성 → 관리 → 정산
│
├── infra/                       # 인프라/배포
│   └── 배포-구조.md              # Docker, CI/CD, 환경변수, 모니터링
│
├── ops/                         # 운영
│   ├── 운영-현황.md              # 마이그레이션 진행, 이슈, 체크리스트
│   ├── cs-guide.md              # 고객 문의 대응 가이드
│   ├── data-policy.md           # 데이터 처리 정책
│   ├── deploy-policy.md         # 배포 정책/절차
│   ├── error-handling.md        # 에러 → 원인 → 대응 매핑
│   ├── qa-criteria.md           # QA 기준
│   └── postmortem/              # 장애 포스트모텀
│
├── public-notion/               # 노션 퍼블릭 가이드 (크롤링 원본)
│   ├── INDEX.md                 # 크롤링 인덱스
│   ├── main-page.md             # 두둥 서비스 소개
│   ├── 두둥-공연-오픈하기.md
│   ├── 두둥-공연-관리하기.md
│   ├── 두둥-호스트-관리하기.md
│   ├── 두둥-티켓-종류-및-유의사항.md
│   ├── 두둥-환불-규정-관련.md
│   ├── 두둥-정산-관련.md
│   ├── 제휴-호스트.md
│   └── 입장-체크하기.md
│
├── tools/                       # CLI 도구
│   ├── sync-status.mjs          # 진행상황 대시보드
│   ├── verify-policies.mjs      # 정책 검증 스크립트
│   ├── policy-map.json          # 정책 매핑 데이터
│   ├── notion-reader.mjs        # Notion 페이지 리더 (Playwright)
│   └── CRAWLING-METHOD.md       # Playwright 노션 크롤링 방법론
│
└── .claude/
    └── skills/                  # Claude Code 스킬
        ├── sync-status.md       # 진행 현황 대시보드 스킬
        ├── verify-policy.md     # 정책 검증 스킬
        ├── add-task.md          # 태스크 생성 스킬
        └── decision-log.md      # 의사결정 기록 스킬
```

---

## 도메인 맵

```
                    ┌─────────┐
                    │  User   │ ← 카카오 OAuth, JWT
                    └────┬────┘
                         │
              ┌──────────┼──────────┐
              │          │          │
         ┌────▼────┐ ┌───▼───┐ ┌───▼────┐
         │  Host   │ │ Order │ │Comment │
         │ (주최자) │ │(주문)  │ │(댓글)  │
         └────┬────┘ └───┬───┘ └────────┘
              │          │
         ┌────▼────┐ ┌───▼───┐     ┌──────────┐
         │  Event  │ │ Cart  │     │  Coupon   │
         │ (공연)   │ │(장바구니)│    │  (쿠폰)   │
         └────┬────┘ └───────┘     └──────────┘
              │
    ┌─────────┼─────────┐
    │         │         │
┌───▼────┐ ┌─▼──────┐ ┌▼──────────┐
│Ticket  │ │Option  │ │Settlement │
│Item    │ │Group   │ │(정산)      │
│(티켓상품)│ │(옵션)   │ └───────────┘
└───┬────┘ └────────┘
    │
┌───▼────────┐
│IssuedTicket│
│(발급티켓/QR)│
└────────────┘
```

---

## 최근 업데이트

- **2026-03-15**: PM 허브 구조 추가
  - epics/ 디렉토리 추가 (EP01~EP03 에픽 3개)
  - tasks/ 디렉토리 추가 (T01~T08 태스크 8개, D/B/F 파트별 추적)
  - decisions/ 디렉토리 추가 (의사결정 로그 DEC-NNN 포맷)
  - templates/ 디렉토리 추가 (task-template.md)
  - sync/ 디렉토리 추가 (검증 리포트)
  - ops/ 확장: cs-guide, data-policy, deploy-policy, error-handling, qa-criteria, postmortem/ 추가
  - tools/ 확장: sync-status.mjs, verify-policies.mjs, policy-map.json, notion-reader.mjs 추가
  - .claude/skills/ 추가: add-task, decision-log, sync-status, verify-policy 스킬
  - ROADMAP.md 추가 (OKR + 에픽 + 스프린트 계획)
  - 코드베이스 기반 의사결정 5건 기록 (DEC-001~005)
- **2026-03-15**: 도메인 중심 재구조화 (플랫 → 계층 구조)
  - 9개 도메인별 정책 + UseCase 시나리오 분리
  - 노션 퍼블릭 가이드 Playwright 크롤링 통합
  - 배포 구조 문서 신규 작성
  - 문의 대응 가이드 각 도메인에 포함
- **2026-03-15**: 워크북 초기 생성 (코드 분석 기반 정책 정리)
