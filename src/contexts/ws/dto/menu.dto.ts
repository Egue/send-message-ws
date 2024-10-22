export class Menu
{
 private menuInicio = "Por favor, digita el número de la opción según tu petición:\n *1.* No puedo descargar mi factura\n *2.* Deseo informacion sobre contactos\n *3.* Deseo adquirir servicio de internet";

  constructor(){
  }

  public get():string{
    return this.menuInicio
  }

}
