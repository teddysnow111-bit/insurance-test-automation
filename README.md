# QA Automation Portfolio Project

Playwright 기반 테스트 자동화 프로젝트

---

## Tech Stack
- Playwright
- TypeScript
- Postman
- GitHub

---

# Playwright Login Test Automation

## 프로젝트 개요
로그인 기능에 대한 E2E 테스트 구현

## 테스트 목표
- 로그인 성공 케이스 검증
- 로그인 실패 케이스 검증

---

## 테스트 구성

### ✔ 성공 로그인
- 정상 계정 입력
- Products 화면 검증

### ✔ 실패 로그인
- 잘못된 계정 입력
- 에러 메시지 검증

---

## 핵심 구현 포인트
- getByRole / getByText / getByPlaceholder 사용
- beforeEach로 테스트 독립성 확보
- expect로 결과 검증

---

## ▶ 실행 방법
```bash
npx playwright test