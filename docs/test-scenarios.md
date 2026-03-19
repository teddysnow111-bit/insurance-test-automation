# Test Scenario

## 1. 사이트 접속 테스트

User Action
- 사용자가 example 사이트에 접속한다

Expected Result
- 페이지가 정상적으로 로드된다
- 페이지 제목이 "Example Domain"이다


## 2. 보험료 계산 버튼 테스트

User Action
- 사용자가 보험료 계산 버튼을 클릭한다

Expected Result
- 버튼 클릭이 정상 동작한다
- 다음 페이지 또는 결과가 출력된다

expect 완전 이해 (중요)
정의
expect = “검증 도구”
구조
await expect(대상).조건
예시 1
await expect(page).toHaveURL(/inventory/)

👉 의미:

URL이 inventory 포함하면 성공
예시 2
await expect(page.getByText('Products')).toBeVisible();

👉 의미:

Products 텍스트가 화면에 보여야 한다