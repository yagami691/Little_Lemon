import "./lemon.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="links">
            About
          </Link>
        </li>
        <li>
          <Link to="/menu" className="links">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/reservations" className="links">
            Reservations
          </Link>
        </li>
        <li>
          <Link to="/orderOnline" className="links">
            Order Online
          </Link>
        </li>
        <li>
          <Link to="/login" className="links">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
