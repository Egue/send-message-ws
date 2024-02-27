
import { Body, Controller, Get,Post, Res, Header } from "@nestjs/common";
import {BaileysProvider } from '@bot-whatsapp/provider-baileys';
import {MemoryDB , createBot, createFlow, createProvider} from '@bot-whatsapp/bot';

import { SendMs } from "../dto/send-ms.dto";
import path , {join} from "path";
import fs, { createReadStream } from "fs";
import { Response } from "express";

@Controller("ws")
export class WsController{
    
    private provider = createProvider(BaileysProvider);

    @Get()
    async run(){

        await createBot({
            flow: createFlow([]),
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