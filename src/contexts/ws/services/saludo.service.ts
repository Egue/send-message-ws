import { addKeyword, EVENTS } from "@bot-whatsapp/bot";
import { Menu } from "../dto/menu.dto";
import { FacturaService } from "./factura.service";
import { forwardRef, Inject, Injectable } from "@nestjs/common";

@Injectable()
export class SaludoService {
  public menu: Menu = new Menu();

  constructor(private readonly factura: FacturaService) {}

  public flujoMensajeSaludo = addKeyword(EVENTS.WELCOME)
    .addAnswer("Bienvenid@ a *Cable y TV Yopal*, internet sin limites")
    .addAnswer(
      "Ahora puedes descargar tu factura ingresando a: https://portalweb.server.cableytv.com/#/login",
    )
    .addAnswer(
      this.menu.get(),
      { capture: true },
      async (ctx, { flowDynamic, gotoFlow }) => {
        const option = ctx.body.trim();
        console.log("Digito opcion: ", option);
        switch (option) {
          case "1":
            await gotoFlow(this.factura.flujoFactura);
            break;
          case "2":
            await flowDynamic(
              "Aquí tienes la información sobre nuestros productos...",
            );
            break;
          case "3":
            await flowDynamic(
              "Estamos conectándote con un agente. Por favor, espera...",
            );
            break;
          default:
            await flowDynamic(
              "Opción no válida. Por favor, selecciona 1, 2 o 3.",
            );
            break;
        }
      },
    );

  public get() {
    return this.flujoMensajeSaludo;
  }
}
