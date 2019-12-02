import SocketService from "./SocketService";

export interface Color {
  hex?: string;
  name?: string;
}

export interface Avatar {
  thumb?: string;
  src?: string;
  name?: string;
}

export interface User {
  id?: string;
  avatar?: Avatar;
  name?: string;
  color?: Color;
}

export interface Room {
  id?: string;
  name: string;
  users?: User[];
  numOfUsers?: number;
}

interface SingleRoll {
  order?: number;
  sides?: number;
  result?: number;
}

export interface RollAuthor {
  name: string;
  avatar: string;
  color: string;
}

export interface RollMessage {
  author: RollAuthor;
  rollString: string;
  total?: number;
  rolls?: SingleRoll[];
  createdAt: Date;
}

export interface ActiveRoom extends Room {
  rollHistory: RollMessage[];
}

export interface GlobalState {
  socketService?: SocketService;
  rooms?: Room[];
  myUser?: User;
  activeRoom?: ActiveRoom;
}
