import io from "socket.io-client";
import { fromEvent, Observable } from "rxjs";
import { RollAuthor, Room, SingleRoll, User } from "./types";
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

interface NewRollResponse {
  rollString: string;
  rolls: SingleRoll[];
  total: number;
  author: RollAuthor;
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

    this.socket.on(`room.list`, (allRooms: Room[]) => {
      // You asked for a room list? Here it is
      console.log(`List of rooms`, allRooms);
    });
    this.socket.on(`room.created`, (newRoom: Room) => {
      // A new room has been created
      console.log(`Room created`, newRoom);
    });
    this.socket.on(`room.join.success`, (joinedRoom: Room) => {
      // You joined a room. Congrats!
      console.log(`Room joined successfully`, joinedRoom);
    });
    this.socket.on(`room.leave.success`, () => {
      // You left the room
      console.log(`Room left successfully`);
    });
    this.socket.on(`room.joined`, (userThatJoined: User) => {
      // Someone joined your room
      console.log(`Someone joined the room`, userThatJoined);
    });
    this.socket.on(`room.left`, (userThatLeft: User) => {
      // Someone left the room
      console.log(`Someone left the room`, userThatLeft);
    });
    this.socket.on(`room.roll.new`, (info: NewRollResponse) => {
      // There is a new roll in the room
      console.log(`Someone rolled the dice!`, info);
    });
    this.socket.on(`error.client`, (errorMsg: string) => {
      // It ain't right, chief
      console.error(`There's been a client error`, errorMsg);
    });
  }

  // ACTIONS
  registerUser(newUser: User) {
    this.socket.emit(`register.new`, newUser);
  }

  restoreUser(session: string) {
    this.socket.emit(`register.restore`, session);
  }

  createARoom(roomName: string) {
    this.socket.emit(`room.create`, roomName);
  }

  joinRoom(roomName: string) {
    this.socket.emit(`room.join`, roomName);
  }

  leaveRoom(roomName: string) {
    this.socket.emit(`room.leave`, roomName);
  }

  sendARoll(rollString: string) {
    this.socket.emit(`room.roll`, rollString);
  }

  stop() {
    this.socket.removeAllListeners();
    this.socket.disconnect();
  }
}
