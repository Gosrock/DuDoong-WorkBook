---
epic: EP09
id: T02
title: 티켓 생성/수정 API에 판매 시간 필드 추가
status: todo
priority: P1
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

티켓 아이템 생성/수정 API의 Request/Response에 `saleStartAt`, `saleEndAt` 필드를 추가한다.
기존 API 호출자가 이 필드를 보내지 않으면 null로 처리 (하위 호환).

## 경로

- `DuDoong-Api/.../ticket_item/` (controller, dto, usecase)

## 작업 내용

- [ ] [BE] `CreateTicketRequest`에 `saleStartAt`, `saleEndAt` 필드 추가 (nullable)
- [ ] [BE] `TicketItemResponse`에 `saleStartAt`, `saleEndAt`, `isSellable`, `saleStatus` 추가
- [ ] [BE] `saleStatus` 계산 로직: `BEFORE_SALE` | `ON_SALE` | `SALE_ENDED` | `STOPPED`
- [ ] [BE] 검증: `saleStartAt < saleEndAt`, `saleEndAt <= event.startAt`

## 수락 기준

- [ ] `saleStartAt`/`saleEndAt` 없이 티켓 생성 → 기존과 동일하게 동작
- [ ] `saleStartAt`/`saleEndAt` 포함해서 티켓 생성 → 필드 저장 및 응답에 반영
- [ ] `saleEndAt > event.startAt` → 400 에러
- [ ] 조회 응답에 `saleStatus` 계산 필드 포함

## 의존성

- EP09-T01 (검증 로직)과 병렬 가능
