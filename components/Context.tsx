import { createContext } from "react";
import { GlobalContext } from "../helpers/types";

const initialState: GlobalContext = {};

export const globalContext = createContext<GlobalContext>(initialState);
