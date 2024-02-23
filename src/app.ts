import { MemoryDB, addKeyword, createBot , createFlow, createProvider } from "@bot-whatsapp/bot";
import {BaileysProvider, handleCtx} from '@bot-whatsapp/provider-baileys';

const flowBienvenida = addKeyword('hola').addAnswer('Buenas !! Bienvenido' );

const main = async () => {
    const provider = createProvider(BaileysProvider);

    provider.initHttpServer(3002);

    provider.http?.server.post('/send-message', handleCtx(async(bot , req , res) => {
        const token = req.headers['x-token'];
        //console.log(token);
       if(token === 'a1e6a36ff08a7d428a480da419b90970463fa28277717e3fab4463e1ab971e22')
        {
            const phone = `57${req.body.phone}`;
            const msm = req.body.msm;
            //await bot.sendMessage(phone , msm , {});
            res.end("enviado");
         }else{
            res.end("no found");
        }
        
    }))

    await createBot({
        flow:createFlow([]),
        database:new MemoryDB(),
        provider
    });
}


main();