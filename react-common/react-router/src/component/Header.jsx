import React from "react";
import { Link } from "react-router";

function Header() {
  return (
    <div>
      <Link to="/about">about</Link>
      <br />
      <Link to="/home">home</Link>
      <br />
      <Link to={"/contact"}>Contact us</Link>
    </div>
  );
}

export default Header;
