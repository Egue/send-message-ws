export class DigitaEscribe{

  private digitaNumero: string = 'Por favor, digita el número de la opción, según tu petición:';
  private seleccionUno: string = 'Escribe la palabra clave, según sea tu caso:\n';

  private seleccionPortal: string = 'Estamos a un paso de dar solucion a tu peticion 🥳🥳 \nEscribe la palabra clave, para conocer un poco más tu solicitud'

  constructor(){};

  getDigitaNumero(){return this.digitaNumero};
  getSeleccionUno(){return this.seleccionUno}

  getseleccionPortal(){return this.seleccionPortal}
}
