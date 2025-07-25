import { RouterProvider } from "react-router";
import "./App.css";
import { router } from "./configs/routes";
import { useUserContext } from "./context/hooks";

function App() {
  useUserContext();
  return <RouterProvider router={router} />;
}

export default App;
