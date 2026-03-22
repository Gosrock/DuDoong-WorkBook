---
epic: EP09
id: T03
title: 판매 수동 중지/재개 API
status: todo
priority: P2
type: backend
parts:
  design: n/a
  backend: todo
  frontend: n/a
assignee:
  design: ""
  backend: ""
  frontend: ""
created: 2026-03-23
updated: 2026-03-23
---

## 설명

호스트가 특정 티켓의 판매를 수동으로 중지하거나 재개할 수 있는 API를 추가한다.
`isSellable` 필드를 토글하는 단순 API.

## 경로

- `DuDoong-Api/.../ticket_item/` (controller, usecase)

## 작업 내용

- [ ] [BE] `PATCH /events/{eventId}/ticketItems/{ticketItemId}/sale-status` 엔드포인트
- [ ] [BE] Request: `{ "isSellable": boolean }`
- [ ] [BE] 호스트 매니저 이상 권한 검증
- [ ] [BE] 판매 이력이 있어도 중지/재개 가능 (삭제와 다름)

## 수락 기준

- [ ] `isSellable = false` 설정 → 해당 티켓 주문 시 에러
- [ ] `isSellable = true` 재설정 → 주문 다시 가능
- [ ] 호스트 멤버(매니저 미만) → 403 에러

## 의존성

- EP09-T01 (검증 로직에서 `isSellable` 체크)
