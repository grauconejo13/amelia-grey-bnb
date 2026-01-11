import { Link } from "react-router-dom";
import { navItems } from "../data/navigation";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar navbar-expand-lg sticky-top" style={{ background: "#2f4f4f" }}>
      <div className="container-fluid px-4">
        <Link className="navbar-brand" to="/">
          <img
            src="https://assets.codepen.io/11990995/home-button.png"
            alt="Home"
            width="48"
            height="48"
          />
        </Link>

        <button
          className="navbar-toggler text-white border-0"
          onClick={() => setOpen(!open)}
        >
          ☰ MENU
        </button>

        <nav className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto gap-lg-4">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/rooms">Rooms</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/info">Info & Amenities</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
