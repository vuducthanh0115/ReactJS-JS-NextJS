import { useState } from "react";

const gifts = ["CPU I9", "Ram 32GB", "Card GTX 1660S"];
function Gift() {
  const [arr, setArr] = useState();
  const handler = () => {
    const random = gifts[Math.floor(Math.random() * gifts.length)];
    setArr(`${random}`);
  };

  return (
    <div className="App">
      <h1>{arr || "You don't have gift. Pls click button below"}</h1>
      <button onClick={handler}>Get Gift !</button>
    </div>
  );
}

export default Gift;
