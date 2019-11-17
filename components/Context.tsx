import { createContext } from "react";
import { GlobalState } from "../helpers/types";

const GlobalContext = createContext<GlobalState>({});

export const GlobalProvider = GlobalContext.Provider;
export const GlobalConsumer = GlobalContext.Consumer;

export default GlobalContext;
