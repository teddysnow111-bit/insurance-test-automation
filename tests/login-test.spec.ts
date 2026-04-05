import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('로그인성공', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page.getByText('Products')).toBeVisible();
});

test('로그인 실패', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('wrong_user', 'wrong_pass');

  await expect(loginPage.getErrorMessage()).toBeVisible();

});