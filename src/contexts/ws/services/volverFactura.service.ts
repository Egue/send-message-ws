import { addKeyword } from "@bot-whatsapp/bot";
import { Injectable } from "@nestjs/common";
import { MenuPortalService } from "./menuPortal.service";
import { Menus } from "../dto/menus.dto";

@Injectable()
export class VolverFacturaService {
  private menu: Menus = new Menus();


  constructor(private readonly menuPortal: MenuPortalService) {}

  public flujoVolverFactura = addKeyword("factura")
    .addAnswer(
      `Digita la palabra clave🗝️\n${this.menu.getPortalOPagar()}`,
      { capture: true, delay:1000 },
      async (ctx, { gotoFlow, endFlow, flowDynamic }) => {
        const opcion = ctx.body.trim().toLowerCase();
        console.log(`Cliente digito: ${opcion}`);
        try{
        switch (opcion) {
          case "portal":
            await gotoFlow(this.menuPortal.flujoMenuPortal);
            console.log("Dirigiendose al Portal Clientes")
            return endFlow();
          case "pagar":
            await flowDynamic(this.menu.getPedirDatos());
            await flowDynamic( this.menu.getFuncionarioIN(), {delay:2000});
            return endFlow();
          default:
            await flowDynamic("🤓Disculpame, no entendí.\nPara regresar al menú anterior, escribe *factura*\nPara volver al menú principal, escribe *menu*");
            break;
        }}catch (error) {
          console.error("Error en el flujo de PORTAL o PAGAR", error);
          await flowDynamic("🥺 Disculpa, he tenido inconvenientes procesando tu solicitud\n_*en un momento te atenderá un funcionario IN*_");
        }
      },

    );
}
