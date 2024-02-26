import { Module } from "@nestjs/common";

import { WsController } from "./api/ws.controller";
@Module({
    controllers:[WsController]
})
export class WsModule{}