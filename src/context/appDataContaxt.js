import { createContext } from "react";

export const appContext = createContext({
  app: () => { },
  setApp: () => { }
})