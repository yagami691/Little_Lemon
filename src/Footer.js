import logo from "./assets/Logo.png";
import { Link } from "react-router-dom";
import "./lemon.css";

export default function Footer() {
  return (
    <footer>
      <img src={logo} alt="Logo" className="logo" width="150px" />
      <div>
        <h3 className="link2">Doormat Navigation</h3>
        <ul>
          <li>
            <Link to="/" className="link2">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="link2">
              About
            </Link>
          </li>
          <li>
            <Link to="/menu" className="link2">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/reservations" className="link2">
              Reservations
            </Link>
          </li>
          <li>
            <Link to="/orderOnline" className="link2">
              Order Online
            </Link>
          </li>
          <li>
            <Link to="/login" className="link2">
              Login
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="link2">Contact Info</h3>
        <ul>
          <li>Chicago, IL 60610, USA</li>
          <li>+1 (312) 555-0198</li>
          <li>Hello@littlelemon.com</li>
        </ul>
      </div>

      <div className="doormat">
        <h3 className="link2">Link To Social Media</h3>
        <ul>
          <li>
            <a href="https://web.facebook.com/?locale=fr_FR&_rdc=1&_rdr#">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://x.com/">X</a>
          </li>
          <li>
            <a href="https://www.instagram.com/">Instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
