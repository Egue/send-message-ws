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

  public flujoMenuPortal = addKeyword("portal").addAnswer(
    `${this.digitar.getseleccionPortal()} \n ${this.menu.getMenuPortal()}`,
    { capture: true },
    async (ctx, {flowDynamic, endFlow}) => {
      const opcion = ctx.body.trim().toLowerCase();
      try{
      switch(opcion){
        case "enviar":
          await flowDynamic("Estimado usuari@ a continuación encontrará una *play list informativa* para que pueda enviar su factura al correo 👇");
          await flowDynamic(this.enlace.getPlayListPortal(), {delay:3000})
          await flowDynamic("Estaré siempre atento a tus ordenes🤗\nSi deseas volver al menú princicipal, escribe *menu*",{delay:10000})
          return endFlow();
          case "codigo": case "código":
            await flowDynamic(this.menu.getPedirDatos());
            await flowDynamic( this.menu.getFuncionarioIN(), {delay:2000});
          break;
          case "correo":
            await flowDynamic(this.menu.getPedirDatos());
            await flowDynamic( this.menu.getFuncionarioIN(), {delay:2000});
          break;
          case "otro":
            await flowDynamic(this.menu.getPedirDatos());
            await flowDynamic( this.menu.getFuncionarioIN(), {delay:2000});
          break;
          default:
            await flowDynamic("🤓No entendí lo que escribiste.\nPara regresar al menú anterior, escribe *portal*\nPara volver al menú principal, escribe *menu*");
          break;
      }}catch (error) {
        console.error("Error en el flujo de Menu Portal", error);
        await flowDynamic("Ha ocurrido un error");
      }
    },
  );
}
