import { useState, useEffect } from "react";

function UseEffect() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    console.log("ThanhVD9");
  });
  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
    </div>
  );
}

export default UseEffect;
