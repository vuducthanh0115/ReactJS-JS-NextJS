import { useState } from "react";

function Course() {
  const myCourse = [
    {
      id: 1,
      name: "React",
      price: 1000,
      description: "React is a JavaScript library for building user interfaces",
      image: "https://reactjs.org/logo-og.png",
    },
    {
      id: 2,
      name: "PHP",
      price: 1000,
      description: "React is a JavaScript library for building user interfaces",
      image: "https://reactjs.org/logo-og.png",
    },
    {
      id: 3,
      name: "NextJS",
      price: 1000,
      description: "React is a JavaScript library for building user interfaces",
      image: "https://reactjs.org/logo-og.png",
    },
  ];
  // // RATIO
  // const [checked, setId] = useState(2);
  // const handlerSm = () => {
  //   // Call API handler
  //   console.log(checked);
  // }
  // return (
  //   <div className="App">
  //       <div>
  //       {
  //         myCourse.map(item => (
  //           <div key={item.id}>
  //             <input type = "radio" checked = {checked === item.id} onChange={() => {setId(item.id)}}/>{item.name}
  //           </div>
  //         ))
  //       }
  //       </div>
  //     <button onClick={handlerSm} >
  //       Register
  //     </button>
  // </div>
  // );
  // }

  //CHECK BOX
  const [checked, setChecked] = useState([]);
  const handlerCheckBox = (id) => {
    setChecked((pre) => {
      if (checked.includes(id)) {
        return pre.filter((item) => item !== id);
      } else {
        return [...pre, id];
      }
    });
  };
  const handlerSm = () => {
    // Call API handler
    console.log(checked);
  };
  return (
    <div className="App">
      <div>
        {myCourse.map((item) => (
          <div key={item.id}>
            <input
              type="checkbox"
              ckecked={checked.includes(item.id) ? item.id : ""}
              onChange={() => handlerCheckBox(item.id)}
            />
            {item.name}
          </div>
        ))}
      </div>
      <button onClick={handlerSm}>Register</button>
    </div>
  );
}

export default Course;
