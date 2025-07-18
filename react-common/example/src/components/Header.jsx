import React from "react";
import { Cart } from "../assets/icons";

function Header(props) {
  const { onClick, count } = props;
  return (
    <header>
      <nav className="flex  justify-center">
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
        <div
          onClick={() => {
            onClick("cart");
          }}
          className="ml-20 relative p-3"
        >
          <Cart />
          {count > 0 && (
            <span className="bg-red-500 text-white rounded-full p-1  absolute -top-1 -right-1">
              {count}
            </span>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
