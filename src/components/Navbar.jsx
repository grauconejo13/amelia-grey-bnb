import { useState } from "react";
import { navItems } from "../data/navigation";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar navbar-expand-lg sticky-top" style={{ background: "#2f4f4f" }}>
      <div className="container-fluid px-4">
        <a className="navbar-brand" href="#">
          <img
            src="https://assets.codepen.io/11990995/home-button.png"
            alt="Home"
            width="48"
            height="48"
          />
        </a>

        <button
          className="navbar-toggler text-white border-0"
          onClick={() => setOpen(!open)}
        >
          ☰ MENU
        </button>

        <nav className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto gap-lg-4">
            {navItems.map(item => (
              <li className="nav-item" key={item}>
                <a className="nav-link text-white fw-semibold" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
