import { useEffect } from "react";
import "./Meme.css";

function Meme() {
  useEffect(() => {
    fetch("http://api.imgflip.com/get_memes")
      .then((resp) => resp.json())
      .then((data) => console.log(data.data.memes));
  }, []);

  return (
    <main>
      <form className="form">
        <input type="text" defaultValue="Input text" />
        <input type="text" defaultValue="Input text" />
        <button onClick={console.log("inon")}>Get a new meme image 😂</button>
      </form>
    </main>
  );
}

export default Meme;
