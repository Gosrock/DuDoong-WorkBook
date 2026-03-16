# Figma v0.9 ↔ WorkBook 디자인 싱크 리포트

**작성일**: 2026-03-17
**Figma 페이지**: v0.9 (page id: 10:3)

---

## 1. 화면 인벤토리 (Screen Inventory)

### A. 관객 앱 (ticket) — 홈 & 탐색

| # | Figma ID | 화면 | 설명 |
|---|----------|------|------|
| 42 | [212:2017](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=212-2017&m=dev) | 홈 | 공연 목록 (2열 그리드), 태그/지난공연보기/공연임박순 필터 |
| 44 | [215:2716](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=215-2716&m=dev) | 홈 + 태그 드롭다운 | 장르 태그 (발라드, 락/힙합, 재즈/소울, J-POP, 클래식, 메탈, 인디) + 지역 태그 (상수/홍대, 강남) |
| 60 | [268:5234](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=268-5234&m=dev) | 홈 v2 (하트 추가) | 공연 카드에 하트(찜) 아이콘 추가, 공연임박순 |
| 61 | [268:5355](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=268-5355&m=dev) | 홈 v3 (지그재그) | 최근공연순, 좌우 교차 카드 레이아웃 |
| 62 | [270:5920](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=270-5920&m=dev) | 홈 v4 (원형) | 최근공연순, 원형+사각 조합 레이아웃 |

### B. 관객 앱 — 공연 상세

| # | Figma ID | 화면 | 설명 |
|---|----------|------|------|
| 45 | [215:2902](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=215-2902&m=dev) | 공연 상세 (기존) | 포스터, 타이틀, 호스트, 장소, 시간, "티켓 구매하기" CTA |
| 54 | [223:3168](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=223-3168&m=dev) | 공연 상세 v2 | 티켓 옵션 목록, 공연 소개/예매 안내/세트리스트/유의사항 탭 |
| 55 | [225:3652](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=225-3652&m=dev) | 공연 상세 + 수량 선택 | 하단 수량 선택 바 + 하트/댓글 아이콘 |
| 57 | [236:7176](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=236-7176&m=dev) | 공연 상세 + 문의처 팝업 | 전화번호(010-xxxx), 인스타(@ssii_lw) 연락 수단 |
| — | [276:4154](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=276-4154&m=dev) | concert_detail_v2 | **신규 디자인**: 잔여석 표시, 마감 임박 뱃지, 콘텐츠 탭, 고정 하단바 |

### C. 관객 앱 — 예매 플로우

| # | Figma ID | 화면 | 설명 |
|---|----------|------|------|
| 46 | [215:3005](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=215-3005&m=dev) | 옵션 선택 | 객관식(예/아니오) + 주관식 옵션, 수량 선택, "다음" CTA |
| 47 | [215:3074](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=215-3074&m=dev) | 결제하기 (기존) | 주문 내역, 결제금액, 환불정보(예금주/은행/계좌번호) 입력 |
| 58 | [268:4703](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=268-4703&m=dev) | 결제하기 (쿠폰) | 쿠폰할인 섹션 추가, 결제수단: 계좌이체 |
| 64 | [270:5968](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=270-5968&m=dev) | 결제하기 (수단 선택) | 결제수단: 계좌이체 / 무통장입금 선택 |
| 48 | [215:3143](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=215-3143&m=dev) | 결제 완료 (입금 안내) | 입금자명 안내, 계좌 정보, 복사 버튼 |

### D. 관객 앱 — 티켓/주문 관리

| # | Figma ID | 화면 | 설명 |
|---|----------|------|------|
| 49 | [215:3212](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=215-3212&m=dev) | 티켓 목록 | 입금대기, 승인완료/공연예정, 승인거절/공연종료 상태별 표시 |
| 56 | [236:6973](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=236-6973&m=dev) | 주문 상세 (기존) | 결제정보 + 환불정보 |
| 65 | [270:6082](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=270-6082&m=dev) | 주문 상세 v2 | 예매정보(예매번호, 티켓번호, 승인방식, 승인상태) 추가 |
| 64-sub | [270:5968](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=270-5968&m=dev) | 주문완료 탭 | 주문완료/승인 대기중/승인 완료 탭 구조 |

### E. 관객 앱 — 마이페이지

| # | Figma ID | 화면 | 설명 |
|---|----------|------|------|
| 52 | [215:3419](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=215-3419&m=dev) | 마이페이지 | 닉네임, 내 공연 리스트, 관심 공연, 구매 내역, 호스트 관리, 호스팅 공연 관리, 서비스 업데이트 노트, 계정 설정, 로그아웃/회원탈퇴 |

### F. 호스트 어드민 — 공연 준비

| Figma ID | 화면 | 설명 |
|----------|------|------|
| [190:6276](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=190-6276&m=dev) | 공연준비홈 (공연 empty) | "두둥! 등록한 공연이 없어요" + 공연 추가하기 CTA |
| [190:7385](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=190-7385&m=dev) | 공연준비홈 (공연 list) | 준비중 뱃지, 공연 카드, "새로운 공연이 추가되었습니다!" 토스트 |
| [190:6284](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=190-6284&m=dev) | 공연준비홈 (호스트 empty) | "두둥! 등록한 호스트가 없어요" + 호스트 등록하기 CTA |
| [190:6554](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=190-6554&m=dev) | 공연준비홈 (호스트 list) | 호스트 목록 (이름, 등록된 공연 수, 매니저 뱃지) |
| [190:7105](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=190-7105&m=dev) | 공연 상세 (호스트) | 필수 체크리스트: 기본 정보 입력, 상세 정보 입력, 하나 이상의 티켓 생성 |
| [190:7772](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=190-7772&m=dev) | 기본정보 입력 | 공연 포스터, 공연 이름, 공연 일정(단일/다회차), 공연 장소, 티켓 여부, 문의처 |
| [262:3970](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=262-3970&m=dev) | 티켓 관리 | 무료(무제한) + 유료(재고 100/100) 티켓 목록, 티켓 옵션 추가 |

### G. 호스트 페이지 (신규 컨셉)

| # | Figma ID | 화면 | 설명 |
|---|----------|------|------|
| 50 | [215:3281](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=215-3281&m=dev) | 호스트 페이지 메모 | 핑크 포스트잇: "호스트 연락 링크 / 소개 / 지금까지 공연 아카이브 → 혜민이가 한다고 함" |

### H. UI 컴포넌트

| Figma ID | 이름 | 설명 |
|----------|------|------|
| [261:7430](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=261-7430&m=dev) | Dropdown | 드롭다운 컴포넌트 |
| [223:3134](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=223-3134&m=dev) | Input | 입력 필드 컴포넌트 |
| [270:5903](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=270-5903&m=dev) | button (하트) | 하트 아이콘 버튼 |
| [270:5506](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=270-5506&m=dev) | command | 커맨드 컴포넌트 |
| [270:5541](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=270-5541&m=dev) | menu item | 메뉴 아이템 컴포넌트 |

---

## 2. 에픽 ↔ Figma 매핑

### EP01: 예매 플로우 개선 (P0)

| 태스크 | Figma 화면 | 디자인 상태 |
|--------|-----------|-----------|
| T01: 거절 티켓 상태 오표기 | #49 (티켓 목록) — "승인거절" 표시 있음 | ⚠️ 수정 전/후 비교 화면 없음 |
| T02: 매진 티켓 구매 차단 | 없음 | ❌ **매진 상태 UI 디자인 필요** |
| T03: 에러 시 네비게이션 | 없음 | ❌ **에러 화면 디자인 필요** |

### EP02: 호스트 등록 리팩토링 (P1)

| 태스크 | Figma 화면 | 디자인 상태 |
|--------|-----------|-----------|
| T04: 저장버튼 disabled | 기본정보([190:7772](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=190-7772&m=dev)) — 저장 버튼 있음 | ⚠️ disabled 상태 변형 없음 |
| T05: 주소찾기 덮어쓰기 | 기본정보([190:7772](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=190-7772&m=dev)) — 주소 찾기 있음 | ⚠️ 상세주소 입력 인터랙션 미반영 |
| T06: 기본정보 수정 정책 | 기본정보([190:7772](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=190-7772&m=dev)) | ⚠️ 수정 불가 필드 표시 디자인 없음 |
| T07: "알겠어요!" UX 라이팅 | 없음 | ❌ **해당 화면 없음** |

### EP03: 티켓 UI 개선 (P2)

| 태스크 | Figma 화면 | 디자인 상태 |
|--------|-----------|-----------|
| T08: 티켓 매수/순번 UI | #49 (티켓 목록) — 수량 3매 표시 있음 | ⚠️ 개선된 매수/순번 표기 디자인 필요 |

### EP04: 내부 운영 어드민 (P1)

| 항목 | Figma 화면 | 디자인 상태 |
|------|-----------|-----------|
| 어드민 대시보드 전체 | 없음 | ❌ **Figma 디자인 없음** (WorkBook에 텍스트 설계만 존재) |

---

## 3. Gap Analysis

### A. Figma에만 있는 것 (WorkBook 에픽 없음) — 신규 에픽 후보

| 발견 | Figma 화면 | 제안 |
|------|-----------|------|
| **홈 화면 리디자인** | #60, #61, #62 (3가지 레이아웃 변형) | 새 에픽 필요: 홈 화면 UX 개선 |
| **관심 공연 (찜/하트)** | #55, #60 하트 아이콘 + 마이페이지 "관심 공연" | 새 에픽 필요: 찜 기능 |
| **공연 상세 v2** | concert_detail_v2 ([276:4154](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=276-4154&m=dev)) — 잔여석, 마감 임박, 콘텐츠 탭 | 새 에픽 필요: 공연 상세 리디자인 |
| **호스트 페이지** | #50 (메모) — 호스트 소개/아카이브 | 새 에픽 필요: 호스트 프로필 페이지 |
| **결제 수단 다양화** | #64 계좌이체/무통장입금 선택 | 결제 옵션 확장 |
| **쿠폰 적용 UI** | #58 쿠폰할인 섹션 | 쿠폰 기능 프론트 반영 |
| **문의처 팝업** | #57 전화/인스타 연락 | 공연 문의 기능 |
| **주문 상세 개선** | #65 예매정보 + 탭 구조 | 주문 상세 리디자인 |

### B. WorkBook에만 있는 것 (Figma 디자인 없음)

| 항목 | 에픽 | 필요 액션 |
|------|------|---------|
| 매진 티켓 상태 UI | EP01-T02 | **디자이너 작업 필요** |
| 에러/실패 화면 | EP01-T03 | **디자이너 작업 필요** |
| "알겠어요!" 화면 | EP02-T07 | 해당 화면 식별 필요 |
| 어드민 대시보드 전체 | EP04 | **디자이너 작업 필요** (텍스트 설계는 완료) |

### C. 빠진 상태/엣지케이스 (전체)

| 누락 항목 | 해당 화면 | 심각도 |
|----------|---------|--------|
| **Loading 상태** (스켈레톤) | 전체 | 🟡 중 |
| **네트워크 에러** 화면 | 전체 | 🟡 중 |
| **빈 검색 결과** | 홈 (#42) | 🟡 중 |
| **매진 티켓** 표시 | 공연 상세 (#45, #54) | 🔴 높 |
| **로그인/회원가입** 화면 | 없음 | 🟡 중 (카카오 리다이렉트라 UI 최소) |
| **결제 실패** 화면 | 결제 플로우 (#47) | 🔴 높 |
| **환불 완료** 화면 | 주문 상세 (#56) | 🟡 중 |
| **판매 기간 외** 안내 | 공연 상세 (#45) | 🟡 중 |
| **다회차 공연** 일정 선택 | 기본정보 ([190:7772](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=190-7772&m=dev)) | 🟡 중 |
| **티켓 옵션 편집** 화면 | 티켓 관리 ([262:3970](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=262-3970&m=dev)) | 🟢 낮 |

---

## 4. 사용자 플로우 vs Figma 화면 매핑

### 관객 예매 플로우

```
[42] 홈 (공연 목록)
  ↓ 공연 선택
[45/54] 공연 상세
  ↓ "티켓 구매하기"
[46] 옵션 선택 (있는 경우)
  ↓ "다음"
[47/58/64] 결제하기 (결제수단별 변형)
  ↓ 결제 완료
[48] 입금 안내 (두둥티켓) 또는 결제 완료
  ↓
[49] 티켓 목록 (상태 확인)
  ↓ 상세내역
[56/65] 주문 상세
```

**빠진 화면**: 결제 실패 → ? , 매진 → ? , 에러 → ?

### 호스트 공연 등록 플로우

```
[190:6276] 공연준비홈 (empty)
  ↓ "+ 공연 추가하기"
[190:6284] 호스트 선택/생성
  ↓
[190:7772] 기본정보 입력
  ↓
[?] 상세정보 입력 (포스터, 소개 — 화면 미확인)
  ↓
[262:3970] 티켓 생성
  ↓
[190:7105] 필수 체크리스트 확인
  ↓ "공연 등록하기"
[190:7385] 공연 목록 (등록 완료)
```

---

## 5. 디자인 결정 필요 사항

| # | 질문 | 관련 화면 | 우선순위 |
|---|------|---------|---------|
| D1 | 홈 레이아웃 3안(그리드/지그재그/원형) 중 어떤 것을 채택? | #42, #60, #61, #62 | P1 |
| D2 | concert_detail_v2 를 현행 공연 상세를 대체하는 것인지? | #45 vs [276:4154](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=276-4154&m=dev) | P1 |
| D3 | 관심 공연(찜) 기능 스코프는? (백엔드 API 필요) | #55, #60, 마이페이지 | P2 |
| D4 | 호스트 페이지 디자인 확정 일정은? (메모 단계) | #50 | P2 |
| D5 | 결제 수단 계좌이체/무통장입금 병렬 지원 확정? | #64 | P1 |
| D6 | 주문 상세 v2 탭 구조 확정? | #65 | P2 |

---

## 6. 추천 액션 아이템

### 즉시 (Sprint 1 — ~03/28)
1. **EP01 디자인 보충**: 매진 상태, 에러 화면, 결제 실패 화면 디자인 요청
2. **EP02 상태 추가**: 저장 버튼 disabled, 수정 불가 필드 표시
3. **디자인 결정 D1, D2, D5** 확정 → WorkBook decisions/ 기록

### 다음 스프린트 (Sprint 2 — ~04/11)
4. **홈 리디자인** 에픽 신규 생성 (채택된 레이아웃 기준)
5. **공연 상세 v2** 에픽 신규 생성
6. **EP03 디자인 확정**: 티켓 매수/순번 개선안

### 백로그
7. 관심 공연(찜) 기능 에픽
8. 호스트 페이지 에픽
9. 쿠폰 UI 반영
10. EP04 어드민 대시보드 Figma 디자인 시작

---

_이 리포트는 Figma v0.9 페이지와 WorkBook epics/tasks/flow 문서를 교차 분석하여 생성되었습니다._
