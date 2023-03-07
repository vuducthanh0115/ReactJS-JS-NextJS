import { useState } from "react";

function TodoList() {
  const [input, setIput] = useState("");
  const [inputs, setIputs] = useState(
    (() => {
      return JSON.parse(localStorage.getItem("input")) || [];
    }) ?? []
  );

  const handlerE = () => {
    setIputs((pre) => {
      const newinput = [...pre, input];
      const jsonInputs = JSON.stringify(newinput);
      localStorage.setItem("input", jsonInputs);
      return newinput;
    });
    setIput("");
  };
  const handlerAdd = (e) => {
    setIput(e.target.value);
  };
  return (
    <div className="App">
      <div>
        <input value={input} onChange={handlerAdd} />
        <button onClick={handlerE}>Add</button>
        <ul>
          {inputs.map((input, index) => (
            <li key={index}>{input}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
