import { addKeyword } from "@bot-whatsapp/bot";
import { log } from "console";

export class Saludo {
  public mensajeSaludo = addKeyword([
    "hola",
    "Buenos dias",
    "Buenas tardes",
    "Buen dia",
    "Buena tarde",
    "buenas",
  ]).addAnswer(
    "Por favor, digita el número de la opción según tu petición:\n 1. Soporte técnico\n 2. Información sobre productos\n 3. Contacto con un agente",
    { capture: true },
    async (ctx, { flowDynamic }) => {
      const option = ctx.body.trim();
      switch (option) {
        case "1":
          await flowDynamic(
            "Un momento, estamos gestionando tu solicitud de soporte técnico.",
          );
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
}
