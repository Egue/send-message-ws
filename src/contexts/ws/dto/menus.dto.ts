export class Menus {
  private menuInicio =
    "\n*1* Facturas, Soporte portal Clientes.\n\n*2* Cartera, estados de cuenta.\n\n*3* Mi servicio de internet no funciona, comunicarme con mesa de ayuda. \n\n*4* Deseo adquirir servicio de internet. \n\n*5* Peticiones, quejas, reclamos, solicitudes. ";

  private menuCartera =
    "Para comunicarte con el area de *cartera* escribe a los siguientes numeros:\nCoordinador de cartera: *3133487096*\nAuxiliar de cartera: *3155322365*\n_Puedes consultar: Estados de cuenta, consultar pagos, enviar soportes de pago, realizar acuerdos de pago, consultar paz y salvo._";

  private menuMesaAyuda =
    "Para comunicarte con el area de *Mesa de Ayuda*, escribe a los siguientes numeros:\n*3102442952*\n*3133485835*\n_Allí podras pedir ayuda si tienes fallas con el servicio de internet._";
  private menuVentas =
    "Para comunicarte con el area de Ventas, escribe o llama a los siguientes numeros:\n*3160267019*\n*3133487089*\n*3138573050*\n_Allí podras solicitar mas informacion para aquirir servicios con nosotros._";

  private menuPQR =
    "Para comunicarte con el area de PQRS escribe o llama al:\n*3336014444*\n_Alli podrás registrar todos tus peticiones, quejas y reclamos._";

  private menuPortal =
    "\nPalabra clave: *factura*  \n No sé como enviar la factura al correo. \n\nPalabra Clave: *codigo* \n No llega codigo de verificacion. \n\nPalabra clave: *correo* \n No llega la factura al correo registrado \n\nPalabra clave:  *otro* \n Ninguna de las anteriores";

  private pedirDatos =
    "Por favor, digite los siguientes para ayudarle con más precisión:\n🪪 Número de cédula o NIT del titular del servicio\n🥇 Nombre completo\n🌎 Ciudad del servicio \n_En un momento lo atenderá un funcionario IN_";

  private portalOPagar: string =
    "\nPalabra clave: *portal* \nNo puedo descargar mi factura en el portal de clientes \n\nPalabra clave: *pagar* \nNo he podido pagar por PSE";

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
}
