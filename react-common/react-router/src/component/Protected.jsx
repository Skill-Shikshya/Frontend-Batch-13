import { useContext } from "react";
import { Navigate } from "react-router";
import { UserContext } from "../context/UserContext";

function Protected({ children }) {
  const { isLogin } = useContext(UserContext); //consumer of the context UserContext

  if (!isLogin) {
    return <Navigate to={"/login"} />;
  }
  return <>{children}</>;
}

export default Protected;
