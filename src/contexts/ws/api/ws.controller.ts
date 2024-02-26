
import { Body, Controller, Get,Post, Res } from "@nestjs/common";
import {BaileysProvider } from '@bot-whatsapp/provider-baileys';
import {MemoryDB , createBot, createFlow, createProvider} from '@bot-whatsapp/bot';

import { SendMs } from "../dto/send-ms.dto";
import path from "path";
import fs from "fs";
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
    async getImage(@Res() res:Response){
        const imagePath = path.resolve('bot.qr.png');
        const imageExist = fs.existsSync(imagePath);

        if(!imageExist)
        {
            return res.status(404).send('Image not found');
        }
        /*const {size} = fs.statSync(imagePath);
        res.writeHead(200,{
            'Content-Type' : 'image/png',
            'Content-Length' : size,
            'Content-Disposition':`attachment; filename='qr.png'`
        });
        fs.createReadStream(imagePath).pipe(res);*/
        return res.send(imagePath);//res.sendFile(imagePath , {root:'./'});
    }
    
}