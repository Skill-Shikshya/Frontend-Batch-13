import React, { useState } from "react";
import { UserContext } from "./UserContext";
import { useFetch } from "../hooks/useFetch";
import { LOGIN } from "../assets/constants/apiEndpointConstants";

function UserContextProvider({ children }) {
  const [user, setUser] = useState();
  const [isLogin, setIsLogin] = useState(false);
  const [_, loading, error, loginFunction] = useFetch({
    url: LOGIN,
    method: "POST",
    onSuccess: () => {
      setIsLogin(true);
    },
  });
  function login(username, password) {
    loginFunction({ username, password });
    //login ...
  }
  function logout() {
    //logout
  }

  function getUser() {}
  return (
    <UserContext.Provider
      value={{ login, logout, getUser, isLogin, setIsLogin, user, setUser }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
