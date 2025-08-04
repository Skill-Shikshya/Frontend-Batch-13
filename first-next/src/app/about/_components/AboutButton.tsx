"use client";

import React from "react";
import TextTest from "./TextTest";

function AboutButton() {
  console.log("am i client");
  return (
    <button
      onClick={() => {
        console.log("hi");
      }}
      className="border border-white rounded-2xl p-2 hover:cursor-pointer"
    >
      Hello <TextTest />
    </button>
  );
}

export default AboutButton;
