import { addKeyword } from "@bot-whatsapp/bot";
import { Injectable } from "@nestjs/common";
import { DigitaEscribe } from "../dto/digitaEscribe";
import { Menus } from "../dto/menus.dto";
import { FacturaService } from "./factura.service";

@Injectable()
export class VolverIncio {
  private menu: Menus = new Menus();
  private digita: DigitaEscribe = new DigitaEscribe();

  constructor(private readonly factura: FacturaService) {}

  public flujoMenuInicio = addKeyword("menu").addAnswer(
    [this.digita.getDigitaNumero(), this.menu.getMenuIncio()],
    { capture: true, delay: 3000 },
    async (ctx, { flowDynamic, gotoFlow, fallBack }) => {
      const option = ctx.body.trim();
      console.log("Escribio 'MENU' y Digitó opción: ", option);
      try {
        switch (option) {
          case "1":
            await gotoFlow(this.factura.flujoFactura);
            console.log("Dirigiendose al Portal o PSE");
            break;
          case "2":
            await flowDynamic(this.menu.getMenuCartera());
            await flowDynamic(this.menu.getMenuIncial(), { delay: 1000 });
            break;
          case "3":
            await flowDynamic(this.menu.getMenuMesaAyuda());
            await flowDynamic(this.menu.getMenuIncial(), { delay: 1000 });
            break;
          case "4":
            await flowDynamic(this.menu.getMenuVentas());
            await flowDynamic(this.menu.getMenuIncial(), { delay: 1000 });
            break;
          case "5":
            await flowDynamic(this.menu.getMenuPQR());
            await flowDynamic(this.menu.getMenuIncial(), { delay: 1000 });
            break;
          default:
            await flowDynamic("🤓 No entiendo tu petición: \n");
            return fallBack();
        }
      } catch (error) {
        console.error("Error en el flujo de saludo", error);
        await flowDynamic("Ha ocurrido un error");
      }
    },
  );
}
