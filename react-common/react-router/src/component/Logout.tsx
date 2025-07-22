import React from "react";

function Logout({ setIsLogin }) {
  function onLogOut() {
    localStorage.removeItem("isLogin");
  }
  return (
    <button onClick={onLogOut} className="border px-2 py-1">
      Logout
    </button>
  );
}

export default Logout;
