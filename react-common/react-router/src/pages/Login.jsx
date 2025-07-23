import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router";

function Login() {
  const { login } = useContext(UserContext); //consumer of the context UserContext
  const [username, setUsername] = useState("johnd");
  const [password, setPassword] = useState("m38rmF$");
  const navigate = useNavigate();

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
        <button
          type="button"
          onClick={() => {
            login(username, password, navigate);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
