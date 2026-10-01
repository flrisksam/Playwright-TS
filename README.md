# Playwright TypeScript Starter

A Playwright and TypeScript starter project for building UI tests incrementally.

> API testing is intentionally left out for now — it'll be added back in
> once that's ready to be learned/practiced.

## Application Under Test

- **UI**: [rahulshettyacademy.com/AutomationPractice](https://rahulshettyacademy.com/AutomationPractice/) — a public practice
  page covering common widgets: radio buttons, checkboxes, dropdowns,
  autocomplete, native alert/confirm dialogs, show/hide elements, tables,
  mouse hover menus, iframes, and new tab/window handling.

## Features

- ✅ Cross-browser projects for Chromium, Firefox, and WebKit
- ✅ Multi-environment config via `.env.<env>` files
- ✅ HTML, JUnit, and list reporters
- ✅ Traces, screenshots, and videos on failure
- ✅ ESLint, Prettier, and TypeScript strict mode
- ✅ GitHub Actions and Jenkins CI configuration

## Project Structure

```
├── src
│   └── utils             # Environment configuration
├── tests                  # Add Playwright specs here
├── .github/workflows      # CI pipeline
├── playwright.config.ts
├── .env.qa / .env.staging
└── tsconfig.json
```

## Getting Started

### Install dependencies

```bash
npm install
npx playwright install --with-deps
```

### Run tests

```bash
npm test                # run all tests (all projects)
npm run test:headed     # Run headed (visible browser)
npm run test:debug      # Playwright Inspector debug mode
npm run test:qa         # Run against .env.qa
npm run test:staging    # Run against .env.staging
```

### View reports

```bash
npm run report
```

### Lint / format / type-check

```bash
npm run lint
npm run lint:fix
npm run format
npm run typecheck
```

### Generate tests with Codegen

```bash
npm run codegen
```

## Configuration

Environment variables are loaded from `.env.<NODE_ENV>` (default `qa`) via
`src/utils/env.ts`. Override `BASE_URL`, `HEADLESS`, etc. per environment
without touching test code.

## Writing a New Test

Add a spec under `tests` and import Playwright's test API directly:

```ts
import { test, expect } from '@playwright/test';

test('opens the application', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/expected title/i);
});
```

Page objects, fixtures, and reusable components can be introduced as the test
suite grows.

## CI

`.github/workflows/playwright.yml` runs lint, type-check, and the full
test suite on every push/PR, publishing the HTML report and JUnit results
as build artifacts.

### Jenkins

The root [`Jenkinsfile`](Jenkinsfile) runs the same checks and publishes
JUnit results plus Playwright artifacts.

Jenkins setup:

1. Use a Linux agent with Node.js 20+ and the `linux` label. The agent must
   be able to install Playwright's browser dependencies, or use a prebuilt
   Playwright image.
2. Create a Pipeline job configured for this repository and select **Pipeline
   script from SCM**. Jenkins will discover the root `Jenkinsfile`.
3. Install the Jenkins Pipeline and JUnit plugins. The HTML Publisher plugin
   is optional; the HTML report is archived even when that plugin is absent.
4. Add `.env.qa` and `.env.staging` to the repository, or provide the required
   `BASE_URL` value through Jenkins environment/secret configuration. Do not
   commit credentials or other secrets to `.env.*` files.
5. Run the job. The `TEST_ENV` parameter selects the `.env.<environment>` file;
   `CI=true` enables CI retries and worker limits in `playwright.config.ts`.

For a Windows Jenkins agent, replace the `sh` steps in `Jenkinsfile` with
equivalent `bat` steps and install the required Playwright browser manually
or with `npx playwright install`.
