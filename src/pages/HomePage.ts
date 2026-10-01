import { Page } from '@playwright/test';

export class HomePage {
  constructor(private readonly page: Page) {}

  async goto(): Promise<void> {
    // Leading slash would resolve against the origin, dropping the baseURL's path segment.
    await this.page.goto('');
  }
}
