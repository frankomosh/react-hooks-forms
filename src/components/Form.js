// import React, { useState } from "react";

// function Form() {
//   const [firstName, setFirstName] = useState("John");
//   const [lastName, setLastName] = useState("Henry");

//   return (
//     <form>
//       <input type="text" value={firstName} />
//       <input type="text" value={lastName} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Form;
// import React, { useState } from "react";

// function Form() {
//   const [firstName, setFirstName] = useState("John");
//   const [lastName, setLastName] = useState("Henry");
// src/components/Form
import React from "react";

function Form(props) {
  return (
    <form>
      {/* <input type="text" value={firstName} />
      <input type="text" value={lastName} /> */}
      <input
        type="text"
        onChange={props.handleFirstNameChange}
        value={props.firstName}
      />
      <input
        type="text"
        onChange={props.handleLastNameChange}
        value={props.lastName}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// export default Form;
export default Form;
