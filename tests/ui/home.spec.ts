import { test, expect } from '../../src/fixtures/pages.fixture';

test.describe('Home page', () => {
  test('should display the expected page title', async ({ homePage, page }) => {
    await homePage.goto();

    await expect(page).toHaveTitle('Practice Page');
  });
});
