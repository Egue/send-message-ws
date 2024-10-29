export class DigitaEscribe{

  private digitaNumero: string = '😎Escribe el número de la opción para ayudarte:';
  private seleccionUno: string = 'Digita la palabra clave🔑 adecuada a tu caso:\n';

  private seleccionPortal: string = 'Estamos a un paso de dar solucion a tu peticion🥳 \nEscribe la palabra clave🔑 para conocer un poco más tu solicitud'

  constructor(){};

  getDigitaNumero(){return this.digitaNumero};
  getSeleccionUno(){return this.seleccionUno}

  getseleccionPortal(){return this.seleccionPortal}
}
