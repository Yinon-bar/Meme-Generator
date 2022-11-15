import "./Meme.css";

function Meme() {
  return (
    <main>
      <form className="form">
        <input type="text" defaultValue="Input text" />
        <input type="text" defaultValue="Input text" />
        <button>Get a new meme image 😂</button>
      </form>
    </main>
  );
}

export default Meme;
