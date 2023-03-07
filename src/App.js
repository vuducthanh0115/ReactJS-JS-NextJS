import "./App.css";
import TodoList from "./hooks/TodoList";
import Counter from "./hooks/Counter";
import Gift from "./hooks/Gift";
import GetInfo from "./hooks/GetInfo";
import Course from "./hooks/Course";
import UseEffect from "./hooks/UseEffect";
import UseEffectTwo from "./hooks/UseEffectTwo";
import UseEffectThree from "./hooks/UseEffectThree";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Toggle</button>
      {/* <Course />
      <Counter />
      <TodoList />
      <Gift />
      <GetInfo /> */}
      {/* {show && <UseEffect />} */}
      {/* {show && <UseEffectTwo />} */}
      {show && <UseEffectThree />}
    </div>
  );
}

export default App;
