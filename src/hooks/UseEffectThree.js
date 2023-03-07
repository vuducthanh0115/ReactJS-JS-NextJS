import { useState, useEffect } from "react";

const tabs = ["posts", "comments", "albums"];

function UseEffectThree() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((post) => setPosts(post));
  }, [type]);
  return (
    <div>
      {tabs.map((t) => (
        <button
          key={t}
          onClick={() => setType(t)}
          style={type === t ? { color: "white", background: "black" } : {}}
        >
          {t}
        </button>
      ))}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseEffectThree;
