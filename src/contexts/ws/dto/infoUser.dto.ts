export class InfoUser
{
  private infoUserDatos: string = "Por favor digite los siguientes datos para por ayudarle con mas precision:\n🪪 Numero de cedula o NIT del titular del servicio\n🥇 Nombre completo\n🌎 Ciudad del servicio";

  constructor(){

  }


  public get(){
    return this.infoUserDatos;
  }


}
