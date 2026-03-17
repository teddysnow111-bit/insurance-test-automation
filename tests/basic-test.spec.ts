import { test, expect } from '@playwright/test';

test('example 사이트 접속 테스트', async ({ page }) => {

  await page.goto('https://example.com');

  await expect(page).toHaveTitle(/Example Domain/);

});