
import { Body, Controller, Get,Post, Res, Header } from "@nestjs/common";
import {BaileysProvider } from '@bot-whatsapp/provider-baileys';
import {MemoryDB , addKeyword, createBot, createFlow, createProvider} from '@bot-whatsapp/bot';
import { SendMs } from "../dto/send-ms.dto";
import path , {join} from "path";
import fs, { createReadStream } from "fs";
import { Response } from "express";
import { SaludoService } from "../services/saludo.service";
import { FacturaService } from "../services/factura.service";

@Controller("ws")
export class WsController{

    private provider = createProvider(BaileysProvider);

    constructor(private readonly saludo: SaludoService, private readonly factura: FacturaService){}

    @Get()
    async run(){

        await createBot({
            flow: createFlow([this.saludo.flujoMensajeSaludo, this.factura.flujoFactura]),
            database:new MemoryDB(),
            provider : this.provider
        });
        return {ws:"ok"};
    }

    @Post()
    async send(@Body() send : SendMs){
        this.provider.sendMessage(`57${send.phone}` , send.msm , {});

        return {ws:"send"};
    }

    @Get("/img")
    @Header('Content-Type' , 'image/png')
    async getImage(){
        const PATH = join(process.cwd() , 'bot.qr.png');
        const fileSystem = createReadStream(PATH);
        return fileSystem;
    }

}
