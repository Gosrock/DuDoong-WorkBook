---
epic: EP03
id: T08
title: 티켓 매수/순번 UI 개선
status: todo
priority: P2
type: 디자인/사용성
parts:
  design: todo
  backend: n/a
  frontend: todo
assignee:
  design: ""
  backend: ""
  frontend: ""
created: 2026-03-15
updated: 2026-03-15
---

## 설명
티켓 확인이 어려움 — 몇 매인지 너무 작고, 몇 번째 티켓인지 알기 어려움

## 작업 내용
- [ ] [Design] 티켓 카드 UI 리디자인 (매수 강조, 순번 표기)
- [ ] [FE] 새 디자인 적용

## 현재 구현 상태 (FE)
- 마이페이지 티켓 카드: 티켓번호, 티켓명, 가격만 표시
- **매수/순번 정보 없음** — 현재 UI에 표시 요소 자체가 없음
- QR코드 보기: 바텀시트로 표시 (QR 새창 기능은 주석처리됨)
- 취소 티켓: disabled 처리 + "취소된 티켓" 텍스트
- **수정 방향**: 디자인 새로 필요. "2매 중 1번째" 같은 순번 + 총 매수 표시 추가

## 수락 기준

- [ ] 티켓 카드에서 총 매수(예: "2매")와 현재 순번(예: "1번째")이 명확히 구분되어 표시된다
- [ ] 매수와 순번 정보가 가독성 있는 크기/위계로 디자인에 반영된다
- [ ] 기존 대비 정보 인지 속도가 개선됨을 디자인 리뷰에서 확인한다

## Figma 연결
- **티켓 목록**: #49 (Figma [215:3212](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=215-3212&m=dev)) — "수량: 3매" 텍스트 있으나 작게 표시
- **주문 상세 v2**: #65 (Figma [270:6082](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=270-6082&m=dev)) — "티켓번호: T1032, T1033, T1034" 개별 번호 표시
- ⚠️ 개선된 매수/순번 강조 디자인은 아직 없음 → 디자이너 작업 필요

## 의존성
- Design 완료 후 FE 착수
