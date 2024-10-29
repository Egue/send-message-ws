import { addKeyword, EVENTS } from "@bot-whatsapp/bot";
import { Menus } from "../dto/menus.dto";
import { FacturaService } from "./factura.service";
import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { Bienvenida } from "../dto/bienvenida";
import { Enlaces } from "../dto/enlaces";
import { DigitaEscribe } from "../dto/digitaEscribe";
import { delay } from "rxjs";

@Injectable()
export class SaludoService {
  private menu: Menus = new Menus();
  private digita: DigitaEscribe = new DigitaEscribe();
  private bienvenida: Bienvenida = new Bienvenida();
  private enlaces: Enlaces = new Enlaces();

  constructor(private readonly factura: FacturaService) {}

  public flujoMensajeSaludo = addKeyword(["Hola", "buena tarde", "buenas tardes", "buen dia", "buenos dias","Hola buena tarde", "hola buenas tardes", "buena noche", "buenas noches", "¿como estas?","¿como esta?", "disculpe", "disculpa", "buen día", "buenos días", "¿como estás?","¿como está?", "buenas", "buena", "oli",])
    .addAnswer(this.bienvenida.get())
    .addAnswer(
      [
        `Ahora puedes descargar tu factura ingresando a: ${this.enlaces.getPortalClientes()}`,
      ],
      { delay: 2000 },
    )
    .addAnswer(
      [this.digita.getDigitaNumero(), this.menu.getMenuIncio()],
      { capture: true, delay: 3000 },
      async (ctx, { flowDynamic, gotoFlow, endFlow }) => {
        const option = ctx.body.trim();
        console.log("El contacto saludo y digitó opción: ", option);
        try {
          switch (option) {
            case "1":
              await gotoFlow(this.factura.flujoFactura);
              console.log("Dirigiendose al Portal o PSE");
              break;
            case "2":
              await flowDynamic(this.menu.getMenuCartera())
              await flowDynamic(this.menu.getMenuIncial(), {delay:1000})
              return endFlow();
            case "3":
              await flowDynamic(this.menu.getMenuMesaAyuda());
              await flowDynamic(this.menu.getMenuIncial(), {delay:1000})
              return endFlow();
            case "4":
              await flowDynamic(this.menu.getMenuVentas());
              await flowDynamic(this.menu.getMenuIncial(), {delay:1000})
              return endFlow();
            case "5":
              await flowDynamic(this.menu.getMenuPQR());
              await flowDynamic(this.menu.getMenuIncial(), {delay:1000})
              return endFlow();
            default:
              await flowDynamic("🤓 No comprendo tu petición. Si deseas volver al menú inicial, escribe *menu*.");
              return endFlow;
          }
        } catch (error) {
          console.error("Error en el flujo de saludo", error);
          await flowDynamic("🥺 Disculpa, he tenido inconvenientes procesando tu solicitud\n_*en un momento te atenderá un funcionario IN*_");
        }
      },
    );

  public get() {
    return this.flujoMensajeSaludo;
  }
}
