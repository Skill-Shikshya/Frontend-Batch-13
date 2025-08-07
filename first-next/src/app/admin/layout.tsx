import { redirect } from "next/navigation";
import React from "react";

function layout({ children }: { children: React.ReactElement }) {
  const isLogin = false;
  if (!isLogin) {
    redirect("/login");
  }
  return <div>{children}</div>;
}

export default layout;
