# Figma v0.9 화면 맵

> Figma 페이지: **v0.9** (page id: [10:3](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=10-3&m=dev))
> 마지막 업데이트: 2026-03-22

이 문서는 Figma 디자인 화면과 사용자 플로우를 연결합니다.
Figma에서 해당 화면을 찾으려면 **Figma ID**로 검색하세요.

---

## 관객 앱 플로우

### 1. 홈 → 공연 탐색

```
┌─────────────────────────────────────────────────────┐
│  [공연홈 v2]                                          │
│  ┌────────────┐                          🔍          │
│  │    LOGO     │                                     │
│  └────────────┘                                     │
│  [태그 v] [지난공연보기]          공연임박순 v          │
│                                                      │
│  ┌──────────┐ ┌──────────┐                           │
│  │ 공연 포스터  │ │ 공연 포스터  │  ← 2열 그리드           │
│  │ 공연 타이틀  │ │ 공연 타이틀  │                        │
│  │ 장소 / 날짜  │ │ 장소 / 날짜  │                        │
│  └──────────┘ └──────────┘                           │
│                                                      │
│  하단탭: HOME | TICKET | MY  ← ⚠️ 3탭 (HOSTING 삭제)   │
└─────────────────────────────────────────────────────┘
Figma ID: [326:4583](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=326-4583&m=dev)
```

**태그 드롭다운 (326:4653, 326:4851)**:
- 장르: 전체, 발라드, 락/힙합, 재즈/소울, J-POP, 클래식, 메탈, 인디, ??
- 지역: 상수/홍대, 강남, 강남
- **다중 선택 지원**: 선택 개수 뱃지 표시 (예: ②)
- Figma: [326:4653](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=326-4653&m=dev) (전체), [326:4851](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=326-4851&m=dev) (다중선택)

**홈 와이어프레임 (352:5617)**:
- 3섹션 구조: 브랜딩 → 공연 호스팅 → 공연 리스트
- Figma: [352:5617](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=352-5617&m=dev)

**홈 리디자인 후보안** (디자인 결정 D1 대기):
- `#60` (268:5234) — 기존 그리드 + 하트 아이콘
- `#61` (268:5355) — 좌우 교차(지그재그) 레이아웃, 최근공연순
- `#62` (270:5920) — 원형+사각 조합, 최근공연순

---

### 2. 공연 상세

```
┌─────────────────────────────────────────────────────┐
│  [공연 상세 v2]                                       │
│  ┌────────────────────────┐                          │
│  │       공연 포스터         │                          │
│  └────────────────────────┘                          │
│  제 29회 고스락 정기공연                                │
│  🎵 Host Name >                                      │
│  📍 밴드아트센터홀 >                                    │
│  🕐 2026.01.01.MON 18:00 (180분)                     │
│                                                      │
│  Ticket Options                                      │
│  ┌─────────────────────────────────┐                 │
│  │ 두둥 공연 티켓   ₩6,000  [잔여 5매] │                 │
│  │ 무대 앞 VIP 좌석                   │                 │
│  │ * 호스트 승인 후 확정              │                 │
│  │──────────────────────────────── │                 │
│  │ 두둥 공연 티켓   ₩Free  [잔여 37매] │                 │
│  │ 일반 스탠딩석                      │                 │
│  └─────────────────────────────────┘                 │
│                                                      │
│  [공연 소개] [예매 안내] [세트리스트] [유의사항]             │
│                                                      │
│  하단: [💬] [📩 티켓 구매하기]  ← 고정 하단바             │
└─────────────────────────────────────────────────────┘
Figma ID: [320:4986](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=320-4986&m=dev)
실데이터: [319:4150](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=319-4150&m=dev)
```

**수량 선택 (320:5408)**:
- 하단 시트: 티켓명 + [-] 수량 [+] + 가격
- "ⓘ 티켓은 한번에 한 종류만 구매할 수 있습니다"
- Figma: [320:5408](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=320-5408&m=dev)

**복수 티켓 선택 에러 (322:4391)**:
- 빨간 토스트 배너: "티켓은 한 주문당 한 종류만 구매할 수 있습니다"
- Figma: [322:4391](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=322-4391&m=dev)

**공연 상세 (기존, 215:2902)**:
- 이전 버전 유지 — v2로 대체 여부 D2 결정 대기
- Figma: [215:2902](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=215-2902&m=dev)

**문의처 팝업 (236:7176)**:
- 전화번호 + 인스타 연락 수단, 반투명 오버레이 카드
- Figma: [236:7176](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=236-7176&m=dev)

---

### 3. 예매 플로우

```
[공연 상세] → 티켓 구매하기 클릭
    ↓
┌─────────────────────────────────────────────────────┐
│  [옵션 선택하기 v2]                                    │
│                                                      │
│  옵션 선택하기                                        │
│  모든 티켓에 동일 옵션 적용 (○)                        │
│                                                      │
│  A option ticket          (1/3) ∧                   │
│  ┌─────────────────────────────┐                    │
│  │ 객관식 옵션 1         + 1,000 원 │                    │
│  │ [아니오] [에]                  │                    │
│  │ 주관식 옵션 1                  │                    │
│  │ [답변 부탁드립니다!]            │                    │
│  └─────────────────────────────┘                    │
│  A option ticket          (2/3) ∧                   │
│  ┌─────────────────────────────┐                    │
│  │ (동일 옵션 반복)              │                    │
│  └─────────────────────────────┘                    │
│  하단: [다음]                                         │
└─────────────────────────────────────────────────────┘
Figma ID: [324:4723](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=324-4723&m=dev)
```

```
    ↓ 다음
┌─────────────────────────────────────────────────────┐
│  [결제하기 v2]                                        │
│                                                      │
│  결제하기                                             │
│  티켓 주문 내역      주문일시 2026.03.05 19:42         │
│  A option ticket              (총 3매) ∧              │
│                                                      │
│  결제금액                                              │
│  총 티켓금액                          18,000 원         │
│  옵션금액                                  0 원         │
│  총 결제금액                          16,000 원         │
│                                                      │
│  결제정보                                              │
│  *입금자명은 DUDOONG 닉네임인 '128구구' 로 보내주세요.    │
│  입금기한          결제하기 후 20분간 유효합니다  ← 빨간색  │
│  결제방식                             계좌이체           │
│  결제은행                           카카오뱅크           │
│  결제계좌  (복사)  3333-20-4299811                      │
│  예금주                               가나다            │
│                                                      │
│  판매정보                                     ∧        │
│  환불규정                                              │
│  • 본 공연은 1인 4매까지 예매 가능합니다.                 │
│  ○ 주문내용과 환불/취소 규정을 확인하였으며 이에 동의합니다.│
│                                                      │
│  [결제하기]                                            │
└─────────────────────────────────────────────────────┘
Figma ID: [324:4908](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=324-4908&m=dev)
변형: [352:5534](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=352-5534&m=dev)
```

---

### 4. 주문/티켓 관리

**주문목록 v2 — 리스트형 (327:4210)**:

```
┌─────────────────────────────────────────────────────┐
│  LOGO                                    🔍         │
│  [태그 v] [지난공연보기]          최근주문순 v          │
│                                                      │
│  2026.03.05                          상세내역 >        │
│  ┌──┐ Concert Name                                   │
│  │D-13│ 티켓: A option ticket                         │
│  └──┘ 수량: 3매                                       │
│       18,000원                    [승인대기]             │
│                                                      │
│  2026.03.05                          상세내역 >        │
│  ┌──┐ Concert Name                                   │
│  │D-3│ 티켓: B option ticket                          │
│  └──┘ 수량: 1매                                       │
│       16,000원                    [승인완료]             │
│                                                      │
│  2026.02.13                          상세내역 >        │
│  ┌────┐ Concert Name                                 │
│  │공연종료│ 티켓: B option ticket                       │
│  └────┘ 수량: 1매                                     │
│       16,000원                    [승인거절]             │
│                                                      │
│  하단탭: HOME | TICKET | MY                            │
└─────────────────────────────────────────────────────┘
Figma ID: [327:4210](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=327-4210&m=dev)
```

**주문목록 v3 — 카드형 (348:4970, 349:5151)**:

```
┌─────────────────────────────────────────────────────┐
│  LOGO                                    🔍         │
│  [태그 v] [지난공연보기]          최근주문순 v          │
│                                                      │
│  ┌───────────────────────────────────┐               │
│  │                            [QR]   │               │
│  │         (포스터 풀사이즈)           │               │
│  │                                   │               │
│  │  Concert Name                     │               │
│  │  2026.02.13 18:00                 │               │
│  │  A option ticket, 3매  [승인대기]   │               │
│  │                                   │               │
│  │  [🎁 티켓 선물하기] [📋 주문 상세확인] │               │
│  └───────────────────────────────────┘               │
│                 1/3  ← 스와이프                       │
│                                                      │
│  하단탭: HOME | TICKET | MY                            │
└─────────────────────────────────────────────────────┘
Figma ID: [348:4970](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=348-4970&m=dev) (승인대기)
         [349:5151](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=349-5151&m=dev) (승인완료)

⚠️ 디자인 결정 D7: 리스트형 vs 카드형 중 택 1
```

**주문상세 — 상태별 화면:**

```
주문상세 구조
├── 공통: 공연 포스터+타이틀+티켓+수량+금액+상태뱃지
├── 결제정보: 입금자명 안내, 입금기한, 결제방식/은행/계좌/예금주
└── 결제금액: 총 티켓금액, (할인금액), (옵션금액), 총 결제금액
```

| 상태 | Figma ID | 특이사항 |
|------|----------|---------|
| 승인대기 | [327:4312](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=327-4312&m=dev) | 기본형 |
| 공연예정 | [324:4987](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=324-4987&m=dev) | **입금기한 카운트다운** "(12분 31초 남음)", 할인금액 |
| 승인완료 (기본) | [330:4644](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=330-4644&m=dev) | 기본형 |
| 승인완료 (예매정보) | [330:4780](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=330-4780&m=dev) | 티켓별 예매자명/예매번호/티켓번호/승인방식 (1/3, 2/3…) |
| 승인완료 (전체펼침) | [330:5012](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=330-5012&m=dev) | 3장 전체 펼침 + 결제정보 + 금액 |
| 승인완료 (옵션포함) | [330:4909](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=330-4909&m=dev) | 객관식/주관식 옵션 답변 + 예매정보 |
| 승인거절 (입금미확인) | [327:4381](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=327-4381&m=dev) | 사유: "입금 내역을 찾을 수 없습니다" + 문의 아이콘 |
| 승인거절 (결제금액오류) | [327:4468](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=327-4468&m=dev) | 사유: "결제금액과 송금액이 일치하지 않습니다" |
| 승인거절 (티켓매진) | [327:4543](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=327-4543&m=dev) | 사유: "주문하신 티켓이 매진되었습니다" |

---

### 5. 마이페이지

```
┌─────────────────────────────────────────────────────┐
│  [마이페이지 v2]                                      │
│  ┌────────────┐                         🔔●          │
│  │    LOGO     │                                     │
│  └────────────┘                                     │
│                                                      │
│  (프로필) 닉네임 ●                                     │
│  asuuel119@gmail.com                                 │
│                                                      │
│  📋 주문 내역                                         │
│  ♡ 관심 공연                                          │
│  ─────────────────────                               │
│  🎵 호스팅 관리                                        │
│  🎵 새 공연 만들기                                     │
│  ─────────────────────                               │
│  ⚙️ 서비스 업데이트 노트                                │
│  ⚙️ 계정 설정                                         │
│  ⚙️ 로그아웃                                          │
│                                                      │
│  하단탭: HOME | TICKET | MY                            │
└─────────────────────────────────────────────────────┘
Figma ID: [330:5982](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=330-5982&m=dev)
```

**이전 버전 대비 변경:**
- ~~내 공연 리스트~~ 삭제
- ~~구매 내역~~ → **주문 내역**
- ~~호스팅 공연 관리~~ → **새 공연 만들기**
- ~~회원탈퇴~~ 삭제 (계정 설정으로 이동 추정)
- 🔔 알림벨 + 빨간 점(안 읽은 알림) 추가

---

## 호스트 어드민 플로우

### 호스팅 센터 (진입점)

```
┌─────────────────────────────────────────────────────┐
│  [L]     호스팅 센터                     🔔           │
│                                                      │
│  [등록한 공연]  [호스트]                               │
│                                                      │
│  ┌──────┐  [등록중]                        ⋮          │
│  │image │  두둥 스페셜 투나잇                           │
│  │      │  호스트: 둥둥즈                              │
│  └──────┘  날짜: 2026년 5월 11일 (수)                  │
│            장소: --                                   │
│                                                      │
│                                                      │
│                                                      │
│                        [+ 공연 추가하기]                │
└─────────────────────────────────────────────────────┘
Figma ID: [336:4762](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=336-4762&m=dev)
진입: 마이페이지 > "호스팅 관리"
```

### 공연 관리 — 대시보드

```
┌─────────────────────────────────────────────────────┐
│  (◎)         대쉬보드                                │
│                                                      │
│         ┌──────────┐                                 │
│         │  [D-17]   │                                 │
│         │  image    │                                 │
│         └──────────┘                                 │
│           둥둥즈                                      │
│      두둥 스페셜 투나잇                                │
│                                                      │
│  주문 현황                                            │
│  ┌──────────┬──────────┬──────────┐                  │
│  │⏱ 승인 대기 │✓ 승인 완료 │✓ 승인 거절 │                  │
│  │ N건 [NEW] │  N건     │  N건     │                  │
│  └──────────┴──────────┴──────────┘                  │
│  판매금액                            0원               │
│                                                      │
│  티켓 현황                                            │
│  ┌────────────┐ ┌────────────┐                       │
│  │🎫 발급된 티켓 │ │👥 입장 현황  │                       │
│  │   N장       │ │  14/50     │                       │
│  └────────────┘ └────────────┘                       │
│                                                      │
│  ⓘ 유의사항                                          │
│  예매 마감, 환불 마감 시간은 공연 시작시간 이전입니다.      │
│  *이미 판매가 된 티켓은 수정, 삭제가 불가합니다.           │
│                                                      │
│  대쉬보드 | 공연 정보 | 티켓 관리 | 예매자 관리 | QR 체크인 │
└─────────────────────────────────────────────────────┘
Figma ID: [336:4617](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=336-4617&m=dev)
초기상태: [336:5467](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=336-5467&m=dev)
```

### 공연 관리 — 공연 정보

```
┌─────────────────────────────────────────────────────┐
│  (◎)     공연 정보                                   │
│         두둥 스페셜 투나잇                              │
│                                                      │
│  [기본 정보]  [상세 정보]  ← 탭                        │
│                                                      │
│  공연 포스터                                          │
│  포스터 이미지는 표준 종이규격 (A,B) 에 최적화…          │
│  ┌────────────────┐                                  │
│  │  📷 이미지 업로드 │  [+]                             │
│  └────────────────┘                                  │
│                                                      │
│  공연 이름*                                           │
│  [두둥 스페셜 투나잇]                                  │
│                                                      │
│  공연 일정*                                           │
│  ● 단일 공연  ○ 다회차 공연                            │
│  📅 2025-05-11 (수요일)                               │
│                                                      │
│  [🔍 미리보기]  [저장하기]                              │
│                                                      │
│  대쉬보드 | 공연 정보 | 티켓 관리 | 예매자 관리 | QR 체크인 │
└─────────────────────────────────────────────────────┘
Figma ID: [336:5678](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=336-5678&m=dev)
```

### 공연 관리 — 상세 정보

```
┌─────────────────────────────────────────────────────┐
│  ←      상세 정보                       📷           │
│                                                      │
│  공연 상세 내용을 적어주세요.                            │
│  이미지는 드래그 앤 드롭으로도 첨부 가능해요.              │
│                                                      │
│  [공연 소개] [예매안내] [세트리스트] [유의사항] [+]        │
│                                                      │
│  ┌─────────────────────────────────────────────┐    │
│  │                                             │    │
│  │           에디터 (WYSIWYG)                   │    │
│  │                                             │    │
│  └─────────────────────────────────────────────┘    │
│                                                      │
│  [저장하기]                                           │
└─────────────────────────────────────────────────────┘
Figma ID: [336:5844](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=336-5844&m=dev)
```

### 공연 준비 → 등록 (기존 유지)

```
[호스팅 센터] → "+ 공연 추가하기"
    ↓
[호스트 선택] → 호스트 있으면 선택, 없으면 "호스트 만들기"
Figma 190:6383 / 190:6554

    ↓
[기본정보 입력]
Figma 190:7772
  - 공연 포스터, 공연 이름, 공연 일정, 공연 장소, 티켓 여부, 문의처

    ↓
[티켓 관리]
Figma 262:3970
  - 무료/유료 티켓 목록, 옵션 추가

    ↓
[필수 체크리스트]
Figma 190:7105
  ○ 기본 정보 입력 / 상세 정보 입력 / 하나 이상의 티켓 생성
  [공연 등록하기]

    ↓
[대시보드] (등록 완료)
Figma 336:5467
  토스트: "공연이 등록되었습니다."
```

---

## 전체 화면 인벤토리 (ID 인덱스)

### 관객 앱

| Figma ID | 화면 | 카테고리 |
|----------|------|---------|
| [326:4583](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=326-4583&m=dev) | 공연홈 v2 | 홈 |
| [326:4653](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=326-4653&m=dev) | 공연홈 + 태그 전체 | 홈 |
| [326:4851](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=326-4851&m=dev) | 공연홈 + 태그 다중선택 | 홈 |
| [352:5617](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=352-5617&m=dev) | 공연홈 와이어프레임 | 홈 |
| [268:5234](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=268-5234&m=dev) | 홈 후보 (하트) | 홈 |
| [268:5355](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=268-5355&m=dev) | 홈 후보 (지그재그) | 홈 |
| [270:5920](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=270-5920&m=dev) | 홈 후보 (원형) | 홈 |
| [319:4150](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=319-4150&m=dev) | 공연 상세 (실데이터) | 공연상세 |
| [320:4986](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=320-4986&m=dev) | 공연 상세 v2 (잔여석) | 공연상세 |
| [320:5170](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=320-5170&m=dev) | 공연 상세 v2 (스크롤) | 공연상세 |
| [320:5408](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=320-5408&m=dev) | 공연 상세 + 수량선택 | 공연상세 |
| [322:4391](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=322-4391&m=dev) | 공연 상세 + 에러토스트 | 공연상세 |
| [276:4154](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=276-4154&m=dev) | concert_detail_v2 (초기) | 공연상세 |
| [236:7176](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=236-7176&m=dev) | 문의처 팝업 | 공연상세 |
| [324:4723](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=324-4723&m=dev) | 옵션 선택하기 v2 | 예매 |
| [324:4908](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=324-4908&m=dev) | 결제하기 v2 | 예매 |
| [352:5534](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=352-5534&m=dev) | 결제하기 v2 (변형) | 예매 |
| [327:4210](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=327-4210&m=dev) | 주문목록 v2 (리스트) | 주문 |
| [348:4970](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=348-4970&m=dev) | 주문목록 v3 (카드, 승인대기) | 주문 |
| [349:5151](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=349-5151&m=dev) | 주문목록 v3 (카드, 승인완료) | 주문 |
| [327:4312](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=327-4312&m=dev) | 주문상세 — 승인대기 | 주문상세 |
| [324:4987](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=324-4987&m=dev) | 주문상세 — 공연예정 | 주문상세 |
| [330:4644](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=330-4644&m=dev) | 주문상세 — 승인완료 | 주문상세 |
| [330:4780](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=330-4780&m=dev) | 주문상세 — 승인완료 (예매정보) | 주문상세 |
| [330:5012](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=330-5012&m=dev) | 주문상세 — 승인완료 (전체펼침) | 주문상세 |
| [330:4909](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=330-4909&m=dev) | 주문상세 — 승인완료 (옵션) | 주문상세 |
| [327:4381](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=327-4381&m=dev) | 주문상세 — 거절 (입금미확인) | 주문상세 |
| [327:4468](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=327-4468&m=dev) | 주문상세 — 거절 (금액오류) | 주문상세 |
| [327:4543](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=327-4543&m=dev) | 주문상세 — 거절 (매진) | 주문상세 |
| [330:5982](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=330-5982&m=dev) | 마이페이지 v2 | 마이페이지 |

### 호스트 어드민

| Figma ID | 화면 | 카테고리 |
|----------|------|---------|
| [336:4762](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=336-4762&m=dev) | 호스팅 센터 | 진입점 |
| [336:4617](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=336-4617&m=dev) | 대시보드 | 공연관리 |
| [336:5467](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=336-5467&m=dev) | 대시보드 (초기) | 공연관리 |
| [336:5678](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=336-5678&m=dev) | 공연 정보 (기본) | 공연관리 |
| [336:5844](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=336-5844&m=dev) | 공연 정보 (상세, 에디터) | 공연관리 |
| [262:3970](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=262-3970&m=dev) | 티켓 관리 | 공연관리 |
| [190:7105](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=190-7105&m=dev) | 필수 체크리스트 | 공연등록 |
| [190:7772](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=190-7772&m=dev) | 기본정보 입력 (레거시) | 공연등록 |
| [190:6276](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=190-6276&m=dev) | 공연준비홈 (empty) | 공연등록 |
| [190:7385](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=190-7385&m=dev) | 공연준비홈 (list) | 공연등록 |
| [190:6284](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=190-6284&m=dev) | 호스트 선택 (empty) | 공연등록 |
| [190:6554](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=190-6554&m=dev) | 호스트 선택 (list) | 공연등록 |

### UI 컴포넌트

| Figma ID | 이름 |
|----------|------|
| [261:7430](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=261-7430&m=dev) | Dropdown |
| [223:3134](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=223-3134&m=dev) | Input |
| [270:5903](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=270-5903&m=dev) | button (하트) |
| [270:5506](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=270-5506&m=dev) | command |
| [270:5541](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=270-5541&m=dev) | menu item |

---

## 누락 화면 목록 (디자인 요청 필요)

| 화면 | 필요 이유 | 연결 에픽 | 우선순위 |
|------|---------|---------|---------|
| 매진 상태 (잔여 0석) | 구매 불가 상태 표시 | EP01-T02 | 🔴 P0 |
| 결제 실패 / 에러 | 실패 시 사용자 안내 | EP01-T03 | 🔴 P0 |
| 알림함 목록 | 알림 목록 상세 화면 | EP08 | 🟡 P1 |
| 예매자 관리 | 호스트 어드민 탭 존재, 화면 없음 | EP04 | 🟡 P1 |
| QR 체크인 | 호스트 어드민 탭 존재, 화면 없음 | EP04 | 🟡 P1 |
| 로딩 스켈레톤 | 로딩 중 UX | 전체 | 🟡 P1 |
| 빈 검색 결과 | 검색 결과 없을 때 안내 | 홈 | 🟡 P1 |
| 티켓 선물하기 상세 | 선물 플로우 화면 | 신규 | 🟡 P1 |

---

_Figma v0.9 페이지 기반 (2026-03-22). 화면 찾기: Figma에서 Cmd+F → ID 검색_
