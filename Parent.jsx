import React from "react";
import Child from "./Child.jsx";
import "./App.css";

function App() {
  const name = "Komal";
  const age = 20;

  return (
    <div className="container">
      <h1>Parent Component</h1>
      <Child name={name} age={age} />
    </div>
  );
}

export default App;