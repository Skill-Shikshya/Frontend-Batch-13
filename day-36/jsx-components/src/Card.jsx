import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div>name:{props.name}</div>
      <div>roll:{props.roll}</div>
      {props.marks < 40 ? "you are fail" : "you are pass"}
    </div>
  );
}

export default Card;
