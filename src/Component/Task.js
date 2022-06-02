import React from "react";
// import "../App.js";
import "./App.css";
export default function Task({ taskName, time }) {
  return (
    <div className="task">
      <h1>TaskName:{taskName}</h1>
      <h1>Time to complete:{time}</h1>
    </div>
  );
}

// camel case ..//
