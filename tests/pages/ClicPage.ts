import { Page, expect } from '@playwright/test';
export class ClicPage {
   constructor(private page: Page) {}
    
   async clicEnPasatiempo() {
        await this.page.getByRole('checkbox', { name: 'Deportes' }).click({ force: true });
    }
    
    async clicEnGenero() {
        await this.page.getByRole('radio', { name: 'Masculino' }).check();
    }
    async clickEnviar() {
        await this.page.getByRole('button', { name: 'Enviar' }).click();
    }

async muestraInformacion() {
    await expect(this.page.getByRole('heading', { name: 'Información Personal' })).toBeVisible();
    await expect(this.page.getByRole('cell', { name: 'Roosvelt' })).toBeVisible();
    await expect(this.page.getByRole('cell', { name: 'Mendoza' })).toBeVisible();
    await this.page.getByRole('button', { name: 'Close' }).click(); 
};
};