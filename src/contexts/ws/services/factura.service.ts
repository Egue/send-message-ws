import { addAnswer, addKeyword } from "@bot-whatsapp/bot";
import { InfoFactura } from "../dto/infoFactura.dto";
import { InfoUser } from "../dto/infoUser.dto";
import { Agente } from "../dto/agente.dto";
import { SaludoService } from "./saludo.service";
import { forwardRef, Inject, Injectable } from "@nestjs/common";

@Injectable()
export class FacturaService {
  public infoFac: InfoFactura = new InfoFactura();
  public infoUser: InfoUser = new InfoUser();
  public agente: Agente = new Agente();

  public flujoFactura = addKeyword("1")
    .addAnswer("Elige la opción según sea tu caso: ")
    .addAnswer(
      this.infoFac.get(),
      { capture: true },
      async (ctx, { flowDynamic, fallBack }) => {
        const opcion = ctx.body.trim().toUpperCase();
        console.log("Opción ingresada:", opcion);
        if (["A", "B", "C", "D"].includes(opcion)) {
          console.log("Respuesta válida, mostrando información.");
          await flowDynamic([this.infoUser.get(), this.agente.get()]);
        } else {
          console.log("Opción no válida, ejecutando fallBack.");
          return fallBack();
        }
      },
    );
}
