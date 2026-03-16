---
epic: EP02
id: T04
title: 등록 후 저장버튼 disabled 처리
status: todo
priority: P1
type: 사용성
parts:
  design: n/a
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
공연 기본정보 등록 이후 수정 불가인데 저장하기 버튼이 활성화되어 있음

## 경로
공연관리 > 공연 기본정보 > 저장하기 (등록 후)

## 작업 내용
- [ ] [FE] 등록 완료 상태일 때 저장 버튼 disabled 처리

## 현재 구현 상태 (FE)
- 공연 기본정보 페이지(`LeftSide.tsx`) 헤더에 "공연 기본정보는 공연 등록 이후에는 수정할 수 없어요" 안내 문구 있음
- 공연 이름: `disabled={true}` — 수정 불가
- 날짜/관람시간: UI 활성화되어 있으나 **저장 API 호출 로직 미구현** (TODO 주석만 존재)
- **실제 문제**: 저장 버튼이 없는 게 아니라 PATCH API 자체가 연결 안 됨
- **수정 방향**: T06(수정 정책) 결정 전까지는 현 상태 유지. 결정 후 저장 로직 구현

## 수락 기준

- [ ] 등록 완료된 공연의 기본정보 페이지에서 저장 버튼이 비활성화(disabled) 상태로 표시된다
- [ ] 비활성화된 저장 버튼은 클릭 시 아무 동작도 하지 않는다
- [ ] 등록 전(작성 중) 상태에서는 저장 버튼이 정상 활성화된다

## Figma 연결
- **기본정보 입력**: Figma [190:7772](https://www.figma.com/design/0c9gqvU1azjuaCYMUaYePb/디자인-작업?node-id=190-7772&m=dev) — 저장하기 버튼 있음 (활성 상태만)
- ⚠️ disabled 상태 변형 디자인 없음 → WorkBook#15 에서 요청됨

## 참고
EP02-T06(기본정보 수정 정책) 결정에 따라 방향 달라질 수 있음.
정책 결정 전이라도 현재 스펙 기준으로 먼저 수정 가능
