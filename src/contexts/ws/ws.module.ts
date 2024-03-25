import { Module } from "@nestjs/common";

import { WsController } from "./api/ws.controller";
import { MsmController } from "./api/msm.controller";
@Module({
    controllers:[WsController,MsmController]
})
export class WsModule{}