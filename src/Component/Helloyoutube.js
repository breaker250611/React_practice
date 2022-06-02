import React from "react";

export default function Helloyoutube({ Firstname, Lastname, email }) {
  return (
    <div>
      <h1>Firstname:{Firstname}</h1>
      <h1>LastName: {Lastname}</h1>
      <h1>Email: {email}</h1>
    </div>
  );
}
