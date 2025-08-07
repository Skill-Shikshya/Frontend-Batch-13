import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header>
      <nav className="flex justify-between px-4 py-2">
        <ul className="flex gap-4">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/about"}>
            <li>About</li>
          </Link>
          <Link href={"/contact-us"}>
            <li>Contact us</li>
          </Link>
        </ul>
        <Link href={"/login"} className="border rounded-[4px] p-2">
          Login
        </Link>
      </nav>
    </header>
  );
}

export default Header;
