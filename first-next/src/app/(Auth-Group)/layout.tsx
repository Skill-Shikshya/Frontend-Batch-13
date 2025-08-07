import Link from "next/link";
import React from "react";

function layout({ children }: { children: React.ReactElement }) {
  const isLogin = false;
  if (isLogin) {
    return <>you are already logged in</>;
  }
  return (
    <div>
      <header>
        <nav>
          <ul className="flex gap-4">
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/login"}>
              <li>login</li>
            </Link>
            <Link href={"/register"}>
              <li>Register</li>
            </Link>
          </ul>
        </nav>
      </header>
      {children}
    </div>
  );
}

export default layout;
