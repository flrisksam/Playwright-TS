import { defineConfig, devices } from '@playwright/test';
import { config } from './src/utils/env';

/**
 * See https://playwright.dev/docs/test-configuration for full docs.
 */
export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  expect: { timeout: 5_000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  // The UI target is a free, publicly shared practice site (not under our
  // control) that can rate-limit or slow down under heavy concurrency, so a
  // light retry + capped worker count keeps runs stable both locally and in CI.
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 2 : 4,
  reporter: [
    ['list'],
    ['html', { open: 'on-failure', outputFolder: 'playwright-report' }],
    ['junit', { outputFile: 'test-results/junit.xml' }],
  ],
  outputDir: 'test-results',

  use: {
    baseURL: config.baseUrl,
    headless: config.headless,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 10_000,
    navigationTimeout: 15_000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      testDir: './tests',
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
      testDir: './tests',
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
      testDir: './tests',
    },
  ],
});
