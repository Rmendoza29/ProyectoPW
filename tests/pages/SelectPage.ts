import { Page, expect } from '@playwright/test';
export class SelectPage {
   
   
    constructor(private page: Page) {}
    async seleccionarDepartamento() {
        await this.page.getByLabel('select-department').selectOption('LIMA');
    }

      async seleccionarCiudad() {
        await this.page.getByLabel('select-city').selectOption('HUARAL');
    }
    
      async seleccionarComando() {
        await this.page.getByLabel('Comandos de Selenium').selectOption('Switch Commands');
    }
};