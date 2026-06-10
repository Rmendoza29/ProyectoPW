import { Page, expect } from '@playwright/test';
export class ButtonPage {
   
   
    constructor(private page: Page) {}
    async clickEnviar() {
        await this.page.getByRole('button', { name: 'Enviar' }).click();
    }

};