export class Enlaces {
  private portalClientes: string = "https://portalweb.server.cableytv.com/#/login";
  private enviarFactura: string = "https://www.youtube.com/watch?v=RL2iXSXDLv0";
  private inciarSesion: string = "https://youtu.be/YrnCLZOte0U";
  private playListPortal: string = 'https://youtube.com/playlist?list=PLm_zowzeExLb1qKq_l4z-J5u_iQlwoQ0E&si=6imV0qO0Omnc0DIF';

  constructor() {}

  getPortalClientes() {
    return this.portalClientes;
  }

  getEnviarFactura() {
    return this.enviarFactura;
  }

  getInicarSesion(){
    return this.inciarSesion;
  }

  getPlayListPortal(){return this.playListPortal}
}
