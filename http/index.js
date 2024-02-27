const express = require('express');
const routes = require('./routes/chatbot-hook')
class ServerHttp{
    port = process.env.port ?? 3003
    constructor()
    {
        this.start();
    }

    buildApp = () => {
        return this.app = express()
        .use(express.json())
        .use(routes)
        .listen(this.port);
    }

    start()
    {
        this.buildApp()
    }
}

module.exports= ServerHttp