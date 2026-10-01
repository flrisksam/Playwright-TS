import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
  test('should display the expected page title', async ({ page }) => {
    // Leading slash would resolve against the origin, dropping the baseURL's path segment.
    await page.goto('');

    await expect(page).toHaveTitle('Practice Page11');
  });
});
