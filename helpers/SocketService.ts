import io from "socket.io-client";
import { fromEvent, Observable } from "rxjs";
import { User } from "./types";

const API_URL = `https://dev.api.be-dice.com`;

interface RegisterSuccessResponse {
  session: String;
  user?: User;
}

interface RegisterRestoreResponse {
  user?: User;
}

export default class SocketService {
  private socket: SocketIOClient.Socket;

  constructor() {
    return this;
  }

  /**
   * Actually connects to the server using socket.io
   */
  init() {
    this.socket = io.connect(API_URL);

    this.socket.on(`connect`, () => {
      console.log(`Connected to ${API_URL}`);

      this.setupListeners();

      this.socket.emit(`server.version`);
    });
  }

  setupListeners() {
    // Get server version
    this.socket.on(`server.version`, (version: string) => {
      console.log(version);
    });

    this.socket.on(`register.new.success`, (res: RegisterSuccessResponse) => {
      console.log(res);
    });

    this.socket.on(`register.new.failure`, (res: any) => {
      console.log(`Registration error`, res);
    });

    this.socket.on(`register.restore.success`, (res: RegisterRestoreResponse) => {
      console.log(`User restored:`, res);
    });
  }

  registerUser(newUser: User) {
    this.socket.emit(`register.new`, newUser);
  }

  restoreUser(session: string) {
    this.socket.emit(`register.restore`, session);
  }
}
