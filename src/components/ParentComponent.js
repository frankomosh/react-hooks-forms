import React, { useState } from "react";
import Form from "./Form";

function ParentComponent() {
  const [firstName, setFirstName] = useState("Didier");
  const [lastName, setLastName] = useState("Drogba");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  return (
    <Form
      firstName={firstName}
      lastName={lastName}
      handleFirstNameChange={handleFirstNameChange}
      handleLastNameChange={handleLastNameChange}
    />
  );
}

export default ParentComponent;