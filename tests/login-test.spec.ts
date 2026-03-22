import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
});

// 테스트 1: 성공 로그인
test('성공 로그인', async ({ page }) => {
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // 검증 1: URL 확인
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // 검증 2: 화면 요소 확인
  await expect(page.getByText('Products')).toBeVisible();
});

// 테스트 2: 실패 로그인
test('실패 로그인', async ({ page }) => {
  await page.getByPlaceholder('Username').fill('wrong');
  await page.getByPlaceholder('Password').fill('wrong');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Epic sadface')).toBeVisible();
});