import { addKeyword } from "@bot-whatsapp/bot";
import { Injectable } from "@nestjs/common";
import { MenuPortalService } from "./menuPortal.service";
import { Menus } from "../dto/menus.dto";

@Injectable()
export class FacturaService {
  private menu: Menus = new Menus();

  constructor(private readonly menuPortal: MenuPortalService) {}

  public flujoFactura = addKeyword("1")
    .addAnswer(
      `Escribe la palabra clave, según sea tu caso: \n${this.menu.getPortalOPagar()}`,
      { capture: true, delay:1000 },
      async (ctx, { gotoFlow, fallBack, flowDynamic }) => {
        const opcion = ctx.body.trim().toLowerCase();
        console.log(`Cliente digito: ${opcion}`);
        try{
        switch (opcion) {
          case "portal":
            await gotoFlow(this.menuPortal.flujoMenoPortal);
            console.log("Dirigiendose al Portal Clientes")
            break;
          case "pagar":
            await flowDynamic(this.menu.getPedirDatos());
            break;
          default:
            await flowDynamic("Opcion no valida: ");
            return fallBack();
        }}catch (error) {
          console.error("Error en el flujo de PORTAL o PAGAR", error);
          await flowDynamic("Ha ocurrido un error");
        }
      },

    );
}
