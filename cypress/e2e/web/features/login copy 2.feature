Feature:Login Inteligenio 03

  @CP001 @Automation @Regression
  Scenario: Login Successfull Gustavo
    Given Yo ingreso a la aplicacion Inteligenio "qa"
    When Yo digito mi usuario "mdac" y contraseña "123456"
    And Yo le doy click en el boton de inicio de sesion
    Then Yo ingreso a la pagina principal

  @CP002 @Automation @Regression
  Scenario: Login UnSuccessfull Vanday
    Given Yo ingreso a la aplicacion Inteligenio "qa"
    When Yo digito mi usuario "mdac" y contraseña "123456"
    And Yo le doy click en el boton de inicio de sesion
    Then Yo ingreso a la pagina principal