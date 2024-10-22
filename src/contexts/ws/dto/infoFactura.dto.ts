import { Controller } from "@nestjs/common";
export class InfoFactura {
  private info: string =
    "*A* Primera vez descargando factura \n*B* No llega codigo de verificacion al telefono \n*C* no llega la factura al correo registrado \n*D* Otro, ¿Cual?";

  constructor() {}

  public get() {
    return this.info;
  }
}
