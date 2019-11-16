import io from "socket.io-client";
import { fromEvent, Observable } from "rxjs";

const API_URL = `dev.api.be-dice.com`;

export default class SocketService {
  private socket: SocketIOClient.Socket;

  constructor(){

  }

  /**
   * Actually connects to the server using socket.io
   */
  init(){
    this.socket = io.connect(API_URL);

    this.socket.on(`connect`, (socket) => {
      console.log(`Connected`, socket);
    });
  }
}
