---
epic: EP09
id: T07
title: Ticket App 공연 상세에서 판매 상태별 UI 처리
status: todo
priority: P1
type: feature
parts:
  design: todo
  backend: n/a
  frontend: todo
assignee:
  design: ""
  backend: ""
  frontend: ""
created: 2026-03-23
updated: 2026-03-23
---

## 설명

사용자 Ticket App의 공연 상세 페이지에서 각 티켓의 판매 상태에 따라 다른 UI를 표시한다.

## 경로

- `DuDoong-Front/apps/ticket/src/components/events/blocks/SelectTicket.tsx`
- `DuDoong-Front/apps/ticket/src/components/events/blocks/Tickets.tsx`

## 작업 내용

- [ ] [Design] 판매 전/판매 종료/판매 중지 상태 티켓 UI 디자인
- [ ] [FE] `BEFORE_SALE`: "X월 X일부터 구매 가능" 안내 + 구매 버튼 비활성화
- [ ] [FE] `SALE_ENDED`: "판매 종료" 표시 + 구매 버튼 숨김
- [ ] [FE] `STOPPED`: "판매 중지" 표시 + 구매 버튼 숨김
- [ ] [FE] `ON_SALE`: 현재와 동일

## 수락 기준

- [ ] 판매 전 티켓에 시작 일시 안내 메시지 표시
- [ ] 판매 종료/중지 티켓은 구매 불가 (버튼 비활성화 또는 숨김)
- [ ] 판매 시간 미설정 티켓 → 기존과 동일 동작
- [ ] 여러 티켓 중 일부만 판매중일 때 혼합 표시 정상

## 의존성

- EP09-T02 (응답에 saleStatus 포함)
