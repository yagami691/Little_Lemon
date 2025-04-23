import Nav from "./Nav";
import logo from "./assets/Logo.svg";
import "./lemon.css";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" className="logo" />
      <Nav />
    </header>
  );
}
