import React, { useState } from "react";
import { useNavigate } from "react-router";

function Login({ setIsLogin }) {
  const [username, setUsername] = useState("johnd");
  const [password, setPassword] = useState("m38rmF$");
  const navigate = useNavigate();
  async function login() {
    try {
      let res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password }),
      });
      if (!res.ok) {
        throw new Error(await res.text());
      }
      await res.json();
      localStorage.setItem("isLogin", "true");
      setIsLogin(true);
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div>
        Username
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          id="username"
          className="border"
        />
      </div>
      <div>
        Password
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          id="password"
          className="border"
        />
        <button type="button" onClick={login}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
