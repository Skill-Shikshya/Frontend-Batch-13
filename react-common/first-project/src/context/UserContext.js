import { createContext } from "react";

export const UserContext = createContext({
  cart: 0,
  setCart: () => {},
  isLogin: false,
});
