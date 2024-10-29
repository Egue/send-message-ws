export class Menus {
  private menuInicio =
    "\n*1* Facturas, portal Clientes.\n\n*2* Cartera, estados de cuenta.\n\n*3* Mi servicio de internet no funciona, comunicarme con mesa de ayuda. \n\n*4* Deseo adquirir servicio de internet. \n\n*5* Peticiones, quejas, reclamos, solicitudes. ";

  private menuCartera =
    "Nuestro personal estará encantado en ayudarte🤗\nPara comunicarte con el area de *cartera* escribe a los siguientes numeros:\nCoordinador de cartera: *3133487096*\nAuxiliar de cartera: *3155322365*\n_Puedes consultar: Estados de cuenta, consultar pagos, enviar soportes de pago, realizar acuerdos de pago, consultar paz y salvo._";

  private menuMesaAyuda =
    "🥺Lamento mucho que tengas inconvenientes con tu servicio, pero sé que pronto le daremos solución💪\nPara comunicarte con el area de *Mesa de Ayuda*, escribe a los siguientes numeros:\n*3102442952*\n*3133485835*\n_Allí podras pedir ayuda si tienes fallas con el servicio de internet._";
  private menuVentas =
    "🥳¡Graciaaas! por preferirnos, Para comunicarte con el area de *Ventas*, escribe o llama a los siguientes numeros:\n*3160267019*\n*3133487089*\n*3138573050*\n_Allí podras solicitar mas informacion para aquirir servicios con nosotros._";

  private menuPQR =
    "Estaremos siempre dispuestos a escucharte🙌\nPara comunicarte con el area de *PQRS* escribe o llama al:\n*3336014444*\n_Alli podrás registrar todos tus peticiones, quejas, reclamos y solicitudes._";

  private menuPortal =
    "\nPalabra clave: *enviar*  \n No sé como enviar la factura al correo. \n\nPalabra Clave: *codigo* \n No llega codigo de verificacion. \n\nPalabra clave: *correo* \n No llega la factura al correo registrado \n\nPalabra clave:  *otro* \n Ninguna de las anteriores";

  private pedirDatos =
    "Para brindarte una mejor ayuda, por favor compártenos estos datos:\n🪪 Número de cédula o NIT del titular del servicio\n🥇 Nombre completo\n🌎 Ciudad del servicio";

  private portalOPagar: string =
    "\nPalabra clave: *portal* \nNo puedo descargar mi factura en el portal de clientes \n\nPalabra clave: *saldo* \nNo he podido pagar por PSE";

  private volverMenuInicio: string =
    " ⬅️ Si quieres volver al menú principal, escribe *menu*";

  private funcionarioIN: string = "*_En un momento te atenderá un funcionario IN_*";

  constructor() {}

  getMenuIncio(): string {
    return this.menuInicio;
  }

  getPortalOPagar() {
    return this.portalOPagar;
  }

  getMenuPortal() {
    return this.menuPortal;
  }

  getPedirDatos() {
    return this.pedirDatos;
  }

  getMenuCartera() {
    return this.menuCartera;
  }
  getMenuMesaAyuda() {
    return this.menuMesaAyuda;
  }
  getMenuVentas() {
    return this.menuVentas;
  }

  getMenuPQR() {
    return this.menuPQR;
  }

  getMenuIncial() {
    return this.volverMenuInicio;
  }

  getFuncionarioIN(){return this.funcionarioIN}
}
