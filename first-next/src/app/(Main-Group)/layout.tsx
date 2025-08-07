import React from "react";
import Header from "../_components/Header";

function layout({ children }: { children: React.ReactElement }) {
  return (
    <div>
      <Header />
      {children}
      <footer>Copyright somwthign</footer>
    </div>
  );
}

export default layout;
