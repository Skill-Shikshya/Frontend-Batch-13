import { useContext } from "react";
import Logout from "../../component/Logout";
import { UserContext } from "../../context/UserContext";

function About() {
  const { cart } = useContext(UserContext);
  return (
    <div>
      About <Logout />
    </div>
  );
}

export default About;
