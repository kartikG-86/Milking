import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar-bg py-3" data-bs-theme="light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fs-4" onClick={closeNav}>
            <b class="mx-2">Milk Tracker</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleNavToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/" className="nav-link" style={{ textDecoration: "none" }} onClick={closeNav}>
                <li className="nav-item">
                  Home
                </li>
              </Link>
              <Link to="/history" className="nav-link" style={{ textDecoration: "none" }} onClick={closeNav}>
                <li className="nav-item">
                  History
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
