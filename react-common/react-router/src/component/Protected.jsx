import { Navigate } from "react-router";

function Protected({ children, isLogin }) {
  if (!isLogin) {
    return <Navigate to={"/login"} />;
  }
  return <>{children}</>;
}

export default Protected;
