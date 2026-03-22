---
id: EP03
title: 티켓 UI 개선
priority: P2
status: ready
okr: 사용자 경험
sprint: 2
created: 2026-03-15
updated: 2026-03-22
---

# EP03: 티켓 UI 개선

## 목표
티켓 확인 경험 개선 (매수, 순번 가독성)

## 배경
- 몇 매인지 너무 작게 표시됨
- 몇 번째 티켓인지 알기 어려움
- 디자인팀 작업 선행 필요

## 태스크
| ID | 제목 | 우선순위 | 유형 | 디자인 상태 |
|----|------|---------|------|-----------|
| T08 | 티켓 매수/순번 UI 개선 | P2 | 디자인/사용성 | ✅ 디자인 완료 |

## Figma 연결 (2026-03-22 업데이트)

> **이 에픽은 디자인 결정 D7에 블로킹됨** — 리스트형 vs 카드형 중 채택 후 구현 가능

### 주문목록 — 2가지 디자인 후보 (D7 결정 대기)

**리스트형** ([327:4210](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=327-4210&m=dev)):
- 티켓명 + 수량 명확 표시
- D-day 뱃지 (D-13, D-3, 공연종료)
- 상태 뱃지 (승인대기/완료/거절)

**카드형** ([348:4970](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=348-4970&m=dev), [349:5151](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=349-5151&m=dev)):
- 포스터 풀사이즈 카드 + QR 아이콘
- 스와이프 (1/3)
- "티켓 선물하기" + "주문 상세확인" 버튼

### 주문상세 — 예매정보 펼침으로 매수/순번 해결

- 티켓별 예매정보 아코디언 (1/3, 2/3, 3/3): [330:4780](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=330-4780&m=dev)
- 각 티켓에 예매자명/예매번호/티켓번호/승인방식 표시
- 옵션 답변도 함께 보기 가능: [330:4909](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=330-4909&m=dev)

## 성공 지표
- 티켓 확인 관련 문의 감소
