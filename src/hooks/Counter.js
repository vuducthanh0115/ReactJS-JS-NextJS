import { useState } from "react";

const arr = [100, 400, 800];

function Counter() {
  const [cnt, setCnt] = useState(() => {
    const total = arr.reduce((total, curr) => total + curr);
    console.log(typeof arr.reduce((total, curr) => total + curr));
    return total;
  });

  const handler = () => {
    setCnt((pre) => pre + 1);
    // setCnt((pre) => pre + 1);
    // setCnt((pre) => pre + 1);
  };

  return (
    <div className="App">
      <h1>{cnt}</h1>
      <button onClick={handler}>Click me !</button>
    </div>
  );
}
export default Counter;
