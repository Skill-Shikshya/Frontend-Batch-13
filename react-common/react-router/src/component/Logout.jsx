import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Logout() {
  const { setIsLogin } = useContext(UserContext); //consumer of the context UserContext

  function onLogOut() {
    localStorage.removeItem("isLogin");
    setIsLogin(false);
  }
  return (
    <button onClick={onLogOut} className="border px-2 py-1">
      Logout
    </button>
  );
}

export default Logout;
