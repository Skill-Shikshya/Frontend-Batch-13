import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./style.css";
import App from "./App.jsx";
import Asim from "./Asim.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Asim />
    hi i am asim <h1>hello</h1>
    <h2 className="test">LAKJS</h2>
  </StrictMode>
);
