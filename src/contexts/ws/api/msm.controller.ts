import { Body, Controller, Post } from "@nestjs/common";
import { MsM } from "../dto/msm.dto";
import axios from "axios";

@Controller("hablame")
export class MsmController {

    @Post("priority")
    async sendMsm(@Body() sms:MsM):Promise<any>
    {
            try {
                const url = "https://api103.hablame.co/api/sms/v3/send/priority";
                const headers ={
                    'Content-Type':'application/json',
                    'Accept' :'application/json',
                    'Account' : sms.account,
                    'ApiKey' : sms.apiKey,
                    'Token' : sms.token
                };
                const data = {
                    toNumber : sms.toNumber,
                    sms : sms.sms,
                    flash : sms.flash,
                    sc : "890030",
                    request_dlvr_rcpt : "0"
                }
                const response = await axios.post(url ,data, {headers} );

                return response.data;
            } catch (error:any) {
                throw error.response.data;
            }
    }
}