import React from "react";

function Header(props) {
  const { onClick } = props;
  return (
    <header>
      <nav>
        <ul className="flex gap-5 justify-center text-amber-900 ">
          <li
            onClick={() => {
              onClick("home");
            }}
            className="px-2 py-1 border my-1"
          >
            Home
          </li>
          <li
            onClick={() => {
              onClick("about");
            }}
            className="px-2 py-1 border my-1"
          >
            About
          </li>
          <li
            onClick={() => {
              onClick("contact");
            }}
            className="px-2 py-1 border my-1"
          >
            Contact
          </li>
          <li
            onClick={() => {
              onClick("terms-conditions");
            }}
            className="px-2 py-1 border my-1"
          >
            T & C
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
