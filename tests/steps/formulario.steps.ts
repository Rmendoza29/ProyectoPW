import { Given, When, Then } from '@cucumber/cucumber'; // Importamos las funciones de Cucumber para definir los pasos
import { CustomWorld } from '../support/world'; // Importamos la clase CustomWorld para acceder a las propiedades del navegador y la página
import { TextPage } from '../pages/TextPage'; // Importamos la clase TextPage que contiene los métodos para interactuar con la página de texto
import { setDefaultTimeout } from '@cucumber/cucumber';
import { ClicPage } from '../pages/ClicPage';
import { SelectPage } from '../pages/SelectPage';
import { ButtonPage } from '../pages/ButtonPage';


setDefaultTimeout(30000); // Establecemos un tiempo de espera predeterminado para los pasos de Cucumber

let textPage: TextPage; // Declaramos una variable para almacenar la instancia de TextPage
let clicPage: ClicPage; // Declaramos una variable para almacenar la instancia de ClicPage
let selectPage: SelectPage; // Declaramos una variable para almacenar la instancia de SelectPage
let buttonPage: ButtonPage; // Declaramos una variable para almacenar la instancia de ButtonPage
     
        Given('ingreso a la pagina de Novus Technology', async function (this: CustomWorld) {
             // Creamos una nueva instancia de TextPage utilizando la página del mundo personalizado
               textPage = new TextPage(this.page); // Llamamos al método para ingresar a la página del proyecto
               await textPage.ingresoALaWeb(); // Esperamos a que se complete la navegación a la página
        });
     


     
        When('ingreso el nombre', async function (this: CustomWorld) {
           textPage = new TextPage(this.page);
          await textPage.ingresoNombre('Roosvelt'); // Llamamos al método para ingresar el nombre en la página
        });
     


     
        When('ingreso apellido', async function (this: CustomWorld) {
          textPage = new TextPage(this.page); 
          await textPage.ingresoApellido('Mendoza'); // Llamamos al método para ingresar el apellido en la página
        });
     


     
        When('marco mi pasatiempo', async function (this: CustomWorld) {
         clicPage = new ClicPage(this.page);
         await clicPage.clicEnPasatiempo(); // Llamamos al método para marcar el pasatiempo en la página    
         
        });
     
    
        When('elijo mi genero', async function (this: CustomWorld) {
         clicPage = new ClicPage(this.page);
         await clicPage.clicEnGenero(); // Llamamos al método para elegir el género en la página
        });
     


     
        When('ingreso el numero de telefono', async function (this: CustomWorld) {
          textPage = new TextPage(this.page);
          await textPage.telefono('1234567890'); // Llamamos al método para ingresar el número de teléfono en la página
        });
     


     
        When('ingreso correo electronico', async function (this: CustomWorld) {
          textPage = new TextPage(this.page);
          await textPage.correoElectronico('jorgepazdiaz@gmail.com'); // Llamamos al método para ingresar el correo electrónico en la página
          // Write code here that turns the phrase above into concrete actions
         
        });
     


     
        When('selecciono departamento', async function (this: CustomWorld) {
          // Write code here that turns the phrase above into concrete actions
         selectPage = new SelectPage(this.page);
         selectPage.seleccionarDepartamento(); // Llamamos al método para seleccionar el departamento en la página
        });
     


     
        When('selecciono ciudad', async function (this: CustomWorld) {
          // Write code here that turns the phrase above into concrete actions
          selectPage = new SelectPage(this.page);
          selectPage.seleccionarCiudad(); // Llamamos al método para seleccionar la ciudad en la página 
        });
     


     
        When('selecciono un comando', async function (this: CustomWorld) {
          // Write code here that turns the phrase above into concrete actions
          selectPage = new SelectPage(this.page);
          selectPage.seleccionarComando(); // Llamamos al método para seleccionar un comando en la página
        });
     


     
        When('doy click en enviar', async function (this: CustomWorld) {
          // Write code here that turns the phrase above into concrete actions
          clicPage = new ClicPage(this.page);
          await clicPage.clickEnviar(); // Llamamos al método para hacer clic en el botón de enviar en la página  
          
        });


     
        Then('me muestra los datos en pantalla.', async function () {
          // Write code here that turns the phrase above into concrete actions
         clicPage = new ClicPage(this.page);
         await clicPage.muestraInformacion(); // Llamamos al método para mostrar la información en pantalla
        });
