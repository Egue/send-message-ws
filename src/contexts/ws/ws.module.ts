import { Module } from "@nestjs/common";

import { WsController } from "./api/ws.controller";
import { MsmController } from "./api/msm.controller";
import { SaludoService } from "./services/saludo.service";
import { FacturaService } from "./services/factura.service";
@Module({
    controllers:[WsController,MsmController],
    providers:[SaludoService, FacturaService]
})
export class WsModule{}
