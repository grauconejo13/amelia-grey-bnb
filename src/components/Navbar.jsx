function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom py-3">
      <div className="container">
        <a className="navbar-brand fw-semibold" href="/">
          Amelia Grey
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-4">
            <li className="nav-item">
              <a className="nav-link" href="/rooms">Rooms</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Inquiry</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
