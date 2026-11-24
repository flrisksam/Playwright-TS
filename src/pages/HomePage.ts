import { Page } from '@playwright/test';

export class HomePage {
  constructor(private readonly page: Page) {}

  async goto(): Promise<void> {
    // Leading slash would resolve against the origin, dropping the baseURL's path segment.
    // waitUntil 'domcontentloaded' avoids flaky timeouts from this third-party
    // site's slow-loading ads/trackers, which delay the full 'load' event.
    await this.page.goto('', { waitUntil: 'domcontentloaded' });
  }
}