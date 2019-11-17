import { createContext } from "react";
import { GlobalState } from "../helpers/types";

export const GlobalContext = createContext<GlobalState>({});
