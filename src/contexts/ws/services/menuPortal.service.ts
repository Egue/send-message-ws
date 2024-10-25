import { Injectable } from "@nestjs/common";
import { Menus } from "../dto/menus.dto";
import { addKeyword } from "@bot-whatsapp/bot";
import { DigitaEscribe } from "../dto/digitaEscribe";
import { Enlaces } from "../dto/enlaces";

@Injectable()
export class MenuPortalService {
  private menu: Menus = new Menus();
  private digitar: DigitaEscribe = new DigitaEscribe();
  private enlace: Enlaces = new Enlaces();


  constructor() {}

  public flujoMenoPortal = addKeyword("portal").addAnswer(
    `${this.digitar.getseleccionPortal()} \n ${this.menu.getMenuPortal()}`,
    { capture: true },
    async (ctx, { flowDynamic, fallBack}) => {
      const opcion = ctx.body.trim().toLowerCase();
      switch(opcion){
        case "factura":
          await flowDynamic(['Estimado usuari@ a continuacion encontrará una *play list informativa* para que pueda enviar su factura al correo:',this.enlace.getPlayListPortal()]);
          break;
          case "codigo":
          await flowDynamic(this.menu.getPedirDatos());
          break;
          case "correo":
          await flowDynamic(this.menu.getPedirDatos());
          break;
          case "otro":
          await flowDynamic(this.menu.getPedirDatos());
          break;
          default:
          await flowDynamic("Opcion no valida: ");
          return fallBack();
      }
    },
  );
}
