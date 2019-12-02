import io from "socket.io-client";
import { fromEvent, Observable } from "rxjs";
import { User } from "./types";
import { setApiVersion, setConnectionStatus } from "../redux/connectionSlice";
import store from "../redux/store";

const API_URL = `https://dev.api.be-dice.com`;

interface RegisterSuccessResponse {
  session: String;
  user?: User;
}

interface RegisterRestoreResponse {
  user?: User;
}

interface VersionResponse {
  version: string;
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
      this.setupListeners();
      store.dispatch(setConnectionStatus(true));
      this.socket.emit(`server.version`);
    });
  }

  setupListeners() {
    // Get server version
    this.socket.on(`server.version`, (response: VersionResponse) => {
      store.dispatch(setApiVersion(response.version));
    });

    this.socket.on(`register.new.success`, (res: RegisterSuccessResponse) => {
      console.log(res);
    });

    this.socket.on(`register.new.failure`, (res: any) => {
      console.log(`Registration error`, res);
    });

    this.socket.on(
      `register.restore.success`,
      (res: RegisterRestoreResponse) => {
        console.log(`User restored:`, res);
      }
    );

    this.socket.on(`error`, e => {
      console.error(`Socket error:`, e);
    });

    this.socket.on(`disconnect`, () => {
      console.log(`Disconnected`);
      store.dispatch(setConnectionStatus(false));
    });

    this.socket.on(`room.list`, () => {
      // You asked for a room list? Here it is
    });
    this.socket.on(`room.created`, () => {
      // A new room has been created
    });
    this.socket.on(`room.join.success`, () => {
      // You joined a room. Congrats!
    });
    this.socket.on(`room.leave.success`, () => {
      // You left the room
    });
    this.socket.on(`room.joined`, () => {
      // Someone joined your room
    });
    this.socket.on(`room.left`, () => {
      // Someone left the room
    });
    this.socket.on(`room.roll.new`, () => {
      // There is a new roll in the room
    });
    this.socket.on(`error.client`, () => {
      // It ain't right, chief
    });
  }

  registerUser(newUser: User) {
    this.socket.emit(`register.new`, newUser);
  }

  restoreUser(session: string) {
    this.socket.emit(`register.restore`, session);
  }

  createARoom(roomName: string) {
    this.socket.emit(`room.create`, roomName);
  }


  stop() {
    this.socket.removeAllListeners();
    this.socket.disconnect();
  }
}
