import React, { useState } from "react";

function Button(props) {
  const [toggle, setToggle] = useState(0); //this is a hook

  function toggleButton() {
    setToggle(toggle + 1);
  }

  console.log("i am button", toggle);

  return (
    <button
      onClick={toggleButton}
      id={"my-button" + props.id}
      className="border border-amber-500 py-1 rounded-xl px-3"
    >
      {toggle} {props.children}
    </button>
  );
}

export default Button;
