export class SaludoInicial{

  private saludo: string = 'Bienvenid@ a _*Internet Inalámbrico*_ \nSoy *INbot*, tu asistente virtual que te guiará en la conversación. \n ¿Cómo puedo ayudarte el día de hoy?🤩';

  constructor(){};

  get(){
    return this.saludo;
  }
}
