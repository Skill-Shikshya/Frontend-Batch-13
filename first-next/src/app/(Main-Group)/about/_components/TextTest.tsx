"use client";
import React from "react";

function TextTest({ children }: { children?: React.ReactNode }) {
  return (
    <div
      onClick={() => {
        console.log(children);
      }}
    >
      {children}
    </div>
  );
}

export default TextTest;
