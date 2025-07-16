import React, { useState } from "react";
import Button from "../components/ui/Button";

function About() {
  const [state, setState] = useState(0);

  async function changeState() {
    setState((currentState) => {
      return currentState + 1;
    });
  }
  function sum(a, b) {
    return a + b + state;
  }
  let test = 1 + 3 + state; //test is a derrived state

  const result = sum(1, 2);
  console.log(result);
  return (
    <div className="p-10 bg-red-400">
      About
      <button className="py-1 px-4 border " onClick={changeState}>
        {state} {result} {test}
      </button>
      <Button
        onClick={() => {
          console.log("hello");
        }}
        className={"border-red-500 bg-white"}
      >
        My Button
      </Button>
      <Button
        onClick={() => {
          console.log("hello from your button");
        }}
        className={"border-red-500 bg-blue-600"}
      >
        Your button
      </Button>
    </div>
  );
}

export default About;
