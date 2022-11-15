import "./Header.css";
import trollImg from "../../src/Assets/Troll Face.png";

function Header() {
  return (
    <header className="Header">
      <img className="img" src={trollImg} alt="" />
      <h2 className="headerTitle">Header</h2>
      <h4 className="headerPtoject">React Course - Project 3</h4>
    </header>
  );
}

export default Header;
