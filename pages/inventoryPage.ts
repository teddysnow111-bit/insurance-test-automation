import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly items: Locator;
  readonly title: Locator;
  readonly addToCartButtons: Locator;

  constructor(page: Page) {
    this.page = page;

    this.items = page.locator('.inventory_item');
    this.title = page.getByText('Products');
    this.addToCartButtons = page.getByRole('button', { name: 'Add to cart' });
  }
}