import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { IS_LOGIN } from "./assets/constants/localstorageConstants.js";
import UserContextProvider from "./context/UserContextProvider";

localStorage.getItem(IS_LOGIN);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </StrictMode>
);
