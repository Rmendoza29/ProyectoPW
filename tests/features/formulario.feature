Feature: Formulario Novus

@formulario
Scenario: Registro de Formulario
    Given ingreso a la pagina de Novus Technology
    When ingreso el nombre
    And ingreso apellido
    And marco mi pasatiempo
    And elijo mi genero
    And ingreso el numero de telefono
    And ingreso correo electronico
    And selecciono departamento
    And selecciono ciudad
    And selecciono un comando 
    And doy click en enviar
    Then me muestra los datos en pantalla.