export class SaludoInicial{

  private saludo: string = 'Bienvenid@ a _*Internet Inalámbrico*_ \nSoy *Pablo*, el chatbot que te guiará en la conversación. \n ¿Cómo puedo ayudarte el día de hoy?';

  constructor(){};

  get(){
    return this.saludo;
  }
}
