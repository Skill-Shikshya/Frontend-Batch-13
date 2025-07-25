import React, { useState } from "react";
import { useUserContext } from "../../../context/hooks";

function LoginPage() {
  const { login } = useUserContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <input
        className="border"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        className="border"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={() => {
          login(username, password);
        }}
      >
        submit
      </button>
    </div>
  );
}

export default LoginPage;
