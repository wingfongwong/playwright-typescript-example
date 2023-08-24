import { expect, type Locator, type Page } from "@playwright/test";

export class ExamplePage {
    readonly page: Page;
    readonly baseURL: string = 'https://www.google.com';

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToPage() {
        await this.page.goto(this.baseURL);
    }
}