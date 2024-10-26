import { addKeyword, EVENTS } from "@bot-whatsapp/bot";
import { Menus } from "../dto/menus.dto";
import { FacturaService } from "./factura.service";
import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { Bienvenida } from "../dto/bienvenida";
import { Enlaces } from "../dto/enlaces";
import { DigitaEscribe } from "../dto/digitaEscribe";

@Injectable()
export class SaludoService {
  private menu: Menus = new Menus();
  private digita: DigitaEscribe = new DigitaEscribe();
  private bienvenida: Bienvenida = new Bienvenida();
  private enlaces: Enlaces = new Enlaces();

  constructor(private readonly factura: FacturaService) {}

  public flujoMensajeSaludo = addKeyword(["Hola", "buena tarde", "buenas tardes", "buen dia", "buenos dias","Hola buena tarde", "hola buenas tardes", "buena noche", "buenas noches", "¿como estas?","¿como esta?", "disculpe", "disculpa", "buen día", "buenos días", "¿como estás?","¿como está?"])
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
      async (ctx, { flowDynamic, gotoFlow, fallBack }) => {
        const option = ctx.body.trim();
        console.log("Digitó opción: ", option);
        try {
          switch (option) {
            case "1":
              await gotoFlow(this.factura.flujoFactura);
              console.log("Dirigiendose al Portal o PSE");
              break;
            case "2":
              await flowDynamic(this.menu.getMenuCartera());
              break;
            case "3":
              await flowDynamic(this.menu.getMenuMesaAyuda());
              break;
            case "4":
              await flowDynamic(this.menu.getMenuVentas());
              break;
            case "5":
              await flowDynamic(this.menu.getMenuPQR());
              break;
            default:
              await flowDynamic("Opcion no valida: \n");
              return fallBack();
          }
        } catch (error) {
          console.error("Error en el flujo de saludo", error);
          await flowDynamic("Ha ocurrido un error");
        }
      },
    );

  public get() {
    return this.flujoMensajeSaludo;
  }
}
