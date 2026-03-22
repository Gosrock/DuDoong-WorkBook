# Figma v0.9 ↔ WorkBook 디자인 싱크 리포트 (2차)

**작성일**: 2026-03-22
**Figma 페이지**: v0.9 (page id: 10:3)
**이전 싱크**: 2026-03-17

---

## 1. 이번 싱크에서 발견된 신규/변경 화면 (30+)

### A. 관객 앱 — 홈 & 탐색 (리디자인)

| Figma ID | 화면 | 설명 | 변경사항 |
|----------|------|------|---------|
| [326:4583](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=326-4583&m=dev) | 공연홈 v2 | LOGO + 검색(🔍), 태그/지난공연보기/공연임박순 필터, 2열 그리드 | **하단탭 4→3탭 (HOME, TICKET, MY)** |
| [326:4653](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=326-4653&m=dev) | 공연홈 + 태그 드롭다운 (전체) | 장르 태그 (전체~인디) + 지역 태그 (상수/홍대, 강남) | 드롭다운 UI 업데이트 |
| [326:4851](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=326-4851&m=dev) | 공연홈 + 태그 다중선택 | 발라드 + 상수/홍대 선택됨, **선택 개수 뱃지 (②)** 표시 | **신규**: 다중 태그 필터 |
| [352:5617](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=352-5617&m=dev) | 공연홈 와이어프레임 | 3섹션 구조: 브랜딩 / 공연 호스팅 / 공연 리스트 | **신규**: 홈 구조 설계안 |

### B. 관객 앱 — 공연 상세 (실제 데이터 적용)

| Figma ID | 화면 | 설명 | 변경사항 |
|----------|------|------|---------|
| [319:4150](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=319-4150&m=dev) | 공연 상세 (실제 데이터) | "제 29회 고스락 정기공연" 전체 콘텐츠, 포스터~CTA | 실데이터 적용 완성형 |
| [320:4986](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=320-4986&m=dev) | 공연 상세 v2 (잔여석) | Ticket Options 카드에 **잔여 5매/37매 뱃지**, 고정 하단바 | **신규**: 잔여석 실시간 표시 |
| [320:5170](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=320-5170&m=dev) | 공연 상세 v2 (스크롤) | 세트리스트 영역까지 스크롤된 상태 (SESSION 이미지) | 콘텐츠 탭 완성형 |
| [320:5408](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=320-5408&m=dev) | 공연 상세 + 수량 선택 | 하단 수량 선택 바 [-]1[+], "티켓은 한번에 한 종류만 구매할 수 있습니다" 안내 | **신규**: 단일 티켓 종류 제한 UX |
| [322:4391](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=322-4391&m=dev) | 공연 상세 + 복수 티켓 에러 | 빨간 토스트: "티켓은 한 주문당 한 종류만 구매할 수 있습니다" | **신규**: 에러 토스트 |

### C. 관객 앱 — 예매 플로우 (개편)

| Figma ID | 화면 | 설명 | 변경사항 |
|----------|------|------|---------|
| [324:4723](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=324-4723&m=dev) | 옵션 선택하기 v2 | 티켓별 개별 옵션 (1/3, 2/3) 아코디언, 객관식+주관식 | **신규**: 티켓별 옵션 펼침 UI |
| [324:4908](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=324-4908&m=dev) | 결제하기 v2 | **입금기한: 결제하기 후 20분간 유효**, 판매정보/환불규정 동의 체크 | **신규**: 입금 기한 + 동의 UI |
| [352:5534](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=352-5534&m=dev) | 결제하기 v2 (변형) | 같은 레이아웃, 입금기한 텍스트 없는 변형 | 변형 |

### D. 관객 앱 — 주문/티켓 관리 (대폭 리디자인)

| Figma ID | 화면 | 설명 | 변경사항 |
|----------|------|------|---------|
| [327:4210](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=327-4210&m=dev) | 주문목록 v2 (리스트형) | D-day 뱃지(D-13, D-3), 승인대기/완료/거절 상태뱃지, 최근주문순 | **신규**: 리스트형 주문목록 |
| [348:4970](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=348-4970&m=dev) | 주문목록 v3 (카드형, 승인대기) | 포스터 풀사이즈 카드 + QR아이콘, **"티켓 선물하기"** + "주문 상세확인" 버튼, 스와이프(1/3) | **신규**: 카드형 + 선물하기 |
| [349:5151](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=349-5151&m=dev) | 주문목록 v3 (카드형, 승인완료) | 승인완료 상태 | 상태 변형 |
| [327:4312](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=327-4312&m=dev) | 주문상세 — 승인대기 | 결제정보(입금기한, 결제방식, 은행, 계좌, 예금주) + 결제금액(티켓/옵션/총액) | **신규** |
| [324:4987](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=324-4987&m=dev) | 주문상세 — 공연예정 | 공연예정 뱃지, **입금기한 카운트다운 "(12분 31초 남음)"**, 할인금액 표시 | **신규**: 실시간 카운트다운 |
| [330:4644](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=330-4644&m=dev) | 주문상세 — 승인완료 | 승인완료 뱃지, 결제정보+금액 | **신규** |
| [330:4780](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=330-4780&m=dev) | 주문상세 — 승인완료 (예매정보) | 예매정보 티켓별 펼침 (1/3, 2/3, 3/3) — 예매자명/예매번호/티켓번호/승인방식 | **신규**: 티켓별 예매정보 |
| [330:5012](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=330-5012&m=dev) | 주문상세 — 승인완료 (전체 펼침) | 3장 전체 펼침 + 결제정보 + 결제금액 | 전체보기 변형 |
| [330:4909](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=330-4909&m=dev) | 주문상세 — 승인완료 (옵션 포함) | 예매정보 + **객관식/주관식 옵션 답변** 함께 표시 | **신규**: 옵션 답변 보기 |
| [327:4381](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=327-4381&m=dev) | 주문상세 — 승인거절 (입금미확인) | 승인거절사유 **"입금미확인"** + 안내문 + 문의 아이콘 | **신규**: 거절 사유 UI |
| [327:4468](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=327-4468&m=dev) | 주문상세 — 승인거절 (결제금액오류) | 승인거절사유 **"결제금액오류"** — "결제금액과 송금액이 일치하지 않습니다" | **신규**: 거절 사유 변형 |
| [327:4543](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=327-4543&m=dev) | 주문상세 — 승인거절 (티켓매진) | 승인거절사유 **"티켓매진"** — "주문하신 티켓이 매진되었습니다" | **신규**: 거절 사유 변형 |

### E. 관객 앱 — 마이페이지 (리디자인)

| Figma ID | 화면 | 설명 | 변경사항 |
|----------|------|------|---------|
| [330:5982](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=330-5982&m=dev) | 마이페이지 v2 | 🔔 알림벨(빨간점) + 닉네임/이메일, 주문 내역, ♡ 관심 공연, 호스팅 관리, 새 공연 만들기, 서비스 업데이트 노트, 계정 설정, 로그아웃 | **전면 리디자인** |

**마이페이지 변경 상세:**
- ~~내 공연 리스트~~ → 삭제
- ~~구매 내역~~ → **주문 내역**으로 명칭 변경
- ~~호스팅 공연 관리~~ → **새 공연 만들기**로 변경
- ~~회원탈퇴~~ → 삭제 (계정 설정으로 이동 추정)
- 알림함 벨 아이콘 + 빨간 알림 뱃지 추가 (EP08 연동)
- 하단탭 4→3탭 통일

### F. 호스트 어드민 — 완전 신규 디자인

| Figma ID | 화면 | 설명 | 변경사항 |
|----------|------|------|---------|
| [336:4762](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=336-4762&m=dev) | 호스팅 센터 | **신규 독립 화면**. 탭: 등록한 공연/호스트. 공연 카드(등록중 뱃지, 호스트, 날짜, 장소). "+ 공연 추가하기" FAB. 알림벨 | **완전 신규** |
| [336:4617](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=336-4617&m=dev) | 대시보드 | D-day 뱃지, 호스트명/공연명, **주문 현황**(승인대기 N건 NEW/승인완료/승인거절), **판매금액**, **티켓 현황**(발급된 티켓 N장, 입장 현황 14/50), 유의사항 | **완전 신규** |
| [336:5467](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=336-5467&m=dev) | 대시보드 (초기 상태) | 0건 상태 + "공연 준비 홈" 돌아가기 + "공연이 등록되었습니다." 토스트 | 초기 상태 변형 |
| [336:5678](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=336-5678&m=dev) | 공연 정보 (기본 정보) | 탭: 기본 정보/상세 정보. 포스터 업로드, 공연 이름, 일정(단일/다회차), **미리보기+저장하기** 버튼 | **신규** — 기존 기본정보 화면 대체 |
| [336:5844](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=336-5844&m=dev) | 공연 정보 (상세 정보) | 카메라 아이콘, "공연 상세 내용을 적어주세요" 안내, 탭: 공연 소개/예매안내/세트리스트/유의사항/+, **에디터 영역**, 저장하기 | **완전 신규** — 상세정보 에디터 |

**호스트 어드민 하단 네비게이션 (5탭):**
```
대쉬보드 | 공연 정보 | 티켓 관리 | 예매자 관리 | QR 체크인
```

---

## 2. 주요 구조적 변경사항

### 2-1. 하단 네비게이션 변경

| 구분 | 이전 (v0.9 초기) | 현재 (v0.9 최신) |
|------|-----------------|-----------------|
| **관객 앱** | HOME \| HOSTING \| TICKET \| MY (4탭) | **HOME \| TICKET \| MY (3탭)** |
| **호스트 어드민** | 없음 (체크리스트 기반) | **대쉬보드 \| 공연 정보 \| 티켓 관리 \| 예매자 관리 \| QR 체크인 (5탭)** |

- HOSTING 탭 삭제 → 마이페이지 내 "호스팅 관리"/"새 공연 만들기"로 이동
- 호스트 어드민은 독립 5탭 앱으로 분리

### 2-2. 주문상세 상태별 분리

기존에 1개였던 주문상세가 **4가지 상태 × 다양한 변형**으로 세분화:

```
주문상세
├── 승인대기: 결제정보 + 금액
├── 공연예정: 입금기한 카운트다운 + 할인금액
├── 승인완료
│   ├── 기본: 결제정보 + 금액
│   ├── 예매정보 펼침: 티켓별 예매자명/번호/승인방식
│   └── 옵션 포함: 객관식/주관식 답변 표시
└── 승인거절
    ├── 입금미확인: 사유 + 안내문 + 문의
    ├── 결제금액오류: 사유 + 안내문 + 문의
    └── 티켓매진: 사유 + 안내문 + 문의
```

### 2-3. 티켓 선물하기 (신규 기능)

주문목록 v3 카드형 UI에 **"티켓 선물하기"** 버튼 발견:
- [348:4970](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=348-4970&m=dev), [349:5151](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=349-5151&m=dev)
- 선물 아이콘 + "티켓 선물하기" 텍스트
- **백엔드 API 필요**: 티켓 양도/선물 기능

### 2-4. 단일 티켓 종류 제한

공연 상세 v2에서 "티켓은 한번에 한 종류만 구매할 수 있습니다" 규칙 명시:
- [320:5408](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=320-5408&m=dev) — 안내 문구
- [322:4391](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=322-4391&m=dev) — 에러 토스트

### 2-5. 입금 기한 카운트다운

결제하기/주문상세에 실시간 입금 기한 표시:
- 결제하기: "결제하기 후 20분간 유효합니다"
- 주문상세: "(12분 31초 남음) 2026.03.05 20:02까지"

---

## 3. 에픽 ↔ Figma 매핑 업데이트

### EP01: 예매 플로우 개선 → 대부분 디자인 완료

| 태스크 | 이전 상태 | 현재 상태 | Figma 화면 |
|--------|---------|---------|-----------|
| T01: 거절 티켓 상태 오표기 | ⚠️ 수정 전/후 비교 없음 | ✅ **승인거절 3종 디자인 완료** | [327:4381](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=327-4381&m=dev), [327:4468](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=327-4468&m=dev), [327:4543](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=327-4543&m=dev) |
| T02: 매진 티켓 구매 차단 | ❌ 디자인 없음 | ⚠️ **간접 해결** — 잔여석 뱃지 + 단일 종류 제한 | [320:4986](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=320-4986&m=dev) |
| T03: 에러 시 네비게이션 | ❌ 디자인 없음 | ⚠️ **부분 해결** — 복수 티켓 에러 토스트 있음 | [322:4391](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=322-4391&m=dev) |

### EP04: 어드민 대시보드 → 디자인 대폭 진행!

| 항목 | 이전 상태 | 현재 상태 | Figma 화면 |
|------|---------|---------|-----------|
| 대시보드 | ❌ 디자인 없음 | ✅ **완료** | [336:4617](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=336-4617&m=dev), [336:5467](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=336-5467&m=dev) |
| 공연 정보 편집 | ❌ 디자인 없음 | ✅ **완료** (기본+상세) | [336:5678](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=336-5678&m=dev), [336:5844](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=336-5844&m=dev) |
| 호스팅 센터 | ❌ 디자인 없음 | ✅ **완료** | [336:4762](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=336-4762&m=dev) |
| 티켓 관리 | 기존 있음 | 유지 | [262:3970](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=262-3970&m=dev) |
| 예매자 관리 | ❌ | ❌ **아직 없음** | - |
| QR 체크인 | ❌ | ❌ **아직 없음** | - |

### EP08: 알림함 → 마이페이지 연동 확인

- 마이페이지 v2 ([330:5982](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=330-5982&m=dev))에 🔔 알림벨 + 빨간점 확인
- 호스팅 센터 ([336:4762](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=336-4762&m=dev))에도 알림벨 있음
- 알림함 목록 상세 화면은 아직 없음 → EP08 설계대로 개발 진행

---

## 4. 신규 에픽 후보 (이번 싱크에서 발견)

| 후보 | Figma 화면 | 설명 | 백엔드 영향 |
|------|-----------|------|-----------|
| **티켓 선물하기** | [348:4970](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=348-4970&m=dev) | 구매한 티켓을 다른 사용자에게 선물 | **신규 API 필요** (티켓 양도) |
| **검색 기능** | [326:4583](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=326-4583&m=dev) | 홈 우측 상단 🔍 검색 아이콘 | 검색 API 필요 |
| **호스팅 센터 분리** | [336:4762](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=336-4762&m=dev) | MY에서 진입하는 독립 호스팅 관리 화면 | 기존 API 활용 가능 |

---

## 5. Gap Analysis (여전히 누락된 화면)

| 화면 | 필요 이유 | 상태 |
|------|---------|------|
| **매진 전용 UI** | 잔여석 0일 때 구매 버튼 비활성화 디자인 | ⚠️ 잔여석 뱃지는 있으나 0석 상태 미확인 |
| **결제 실패 화면** | 결제 실패/타임아웃 시 안내 | ❌ 없음 |
| **로딩 스켈레톤** | 로딩 중 UX | ❌ 없음 |
| **빈 검색 결과** | 검색 결과 없을 때 | ❌ 없음 |
| **알림함 목록** | EP08 알림함 상세 화면 | ❌ 없음 (설계서만 존재) |
| **예매자 관리** | 호스트 어드민 탭에 있으나 화면 없음 | ❌ 없음 |
| **QR 체크인** | 호스트 어드민 탭에 있으나 화면 없음 | ❌ 없음 |

---

## 6. 디자인 결정 필요 사항 (업데이트)

| # | 질문 | 관련 화면 | 상태 |
|---|------|---------|------|
| D1 | 홈 레이아웃 채택 → 326:4583 기본형 확정? | [326:4583](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=326-4583&m=dev) vs 기존 #60/#61/#62 | ⚠️ 확인 필요 |
| D2 | concert_detail_v2가 기존 공연 상세 대체? | [320:4986](https://www.figma.com/design/0c9gqvU1azjuaCYMUa7ePb/디자인-작업?node-id=320-4986&m=dev) | ⚠️ 확인 필요 |
| D7 | **신규** 주문목록 리스트형 vs 카드형? | [327:4210](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=327-4210&m=dev) vs [348:4970](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=348-4970&m=dev) | ⚠️ 결정 필요 |
| D8 | **신규** 티켓 선물하기 기능 스코프 확정? | [348:4970](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=348-4970&m=dev) | ⚠️ 결정 필요 |
| D9 | **신규** 호스팅 센터 진입 경로 확정? | [336:4762](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=336-4762&m=dev) | ⚠️ 확인 필요 |

---

## 7. 추천 액션 아이템

### 즉시 (이번 주)
1. 디자인 결정 D1, D2, D7 확정 → decisions/ 기록
2. EP04 에픽 상태 `design` → `ready` 격상 (대시보드/공연정보 디자인 완료)
3. EP01 태스크 Figma 연결 업데이트

### 다음 스프린트
4. 주문상세 상태별 구현 (승인대기/완료/거절 × 변형)
5. 공연 상세 v2 구현 (잔여석, 수량 선택, 단일 종류 제한)
6. 호스트 대시보드 구현 시작

### 백로그
7. 티켓 선물하기 에픽 생성 (D8 결정 후)
8. 검색 기능 에픽 생성
9. 알림함 상세 화면 디자인 요청

---

_이 리포트는 Figma v0.9 페이지 2026-03-22 시점과 이전 싱크(2026-03-17)를 비교 분석하여 생성되었습니다._
