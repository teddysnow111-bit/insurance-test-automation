import { test, expect } from '@playwright/test';

test('보험료 계산 페이지 접속 테스트', async ({ page }) => {

  await page.goto('https://example.com');

  await expect(page).toHaveTitle(/Example/);

});