import "./Header.css";
import trollImg from "../../src/Assets/Troll Face.png";

function Header() {
  return (
    <header className="Header">
      <div className="logo">
        <img className="img" src={trollImg} alt="" />
        <h2 className="headerTitle">Meme Generator 2022</h2>
      </div>
      <h4 className="headerPtoject">React Course - Project 3</h4>
    </header>
  );
}

export default Header;
