import React from "react";

function Child({ name, age }) {
  return (
    <div className="child-box">
      <h2>Child Component</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default Child;