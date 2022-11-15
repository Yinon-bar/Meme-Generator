import "./Header.css";
import trollImg from "../../src/Assets/Troll Face.png";

function Header() {
  return (
    <header className="Header">
      <img src={trollImg} width="60px" alt="" />
      <h2>Header</h2>
      <h4>React Course - Project 3</h4>
    </header>
  );
}

export default Header;
