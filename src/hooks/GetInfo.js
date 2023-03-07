import { useState } from "react";

function GetInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handlerSubmit = () => {
    // Call API
    // setName('VNH');
    console.log({ name, email });
  };

  return (
    <div className="App">
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handlerSubmit}>Register</button>
    </div>
  );
}

export default GetInfo;
