/*
// TODO list making 
// -------------------------------
import React, { useState } from "react";
import "./Component/App.css";
import Task from "./Component/Task.js";
function App() {
  const [taskName, setTaskName] = useState("");
  const [time, setTime] = useState("");
  const [taskList, setTaskList] = useState([]);
  const addTask = () => {
    setTaskList([...taskList, { task: taskName, time: time }]);
    console.log(taskList);
    setTaskName("");
    setTime("");
  };
  return (
    <div className="App">
      <h1>TOdo List</h1>
      <label>Task Name:</label>
      <input
        type="text"
        id="task"
        onChange={(e) => {
          setTaskName(e.target.value);
        }}
      />
      <label>Time:</label>
      <input
        type="text"
        id="time"
        onChange={(e) => {
          setTime(e.target.value);
          console.log(taskName);
        }}
      />
      //{ <h1>{taskName}</h1> }
      <button
        onClick={() => {
          addTask();
        }}
      >
        Add me
      </button>
      {taskList.map((e) => {
        return <Task taskName={e.task} time={e.time} />;
      })}
    </div>
  );
}
export default App;
*/
/*
// making forms
import React, { useState } from "react";
import "./Component/App.css";
function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitform = () => {
    var user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    console.log(user);
  };
  return (
    <div className="App">
      <form>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type="button" onClick={submitform} value="Submit" />
      </form>
    </div>
  );
}
export default App;
*/
// import react, { useState } from "react";
// import { Button } from "./Component/Button.js";
// import "./Component/App.css";

// function App() {
//   return (
//     <div className="App">
//       <Button>this is a button</Button>
//     </div>
//   );
// }
// export default App;
import React, {useState} from "react";
import Login from "./Pages/Login.js";
import AboutUs from "./Pages/AboutUs.js";
import Main from "./Pages/Main.js";
import NavBar from "./Component/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/aboutus" element={<AboutUs/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;