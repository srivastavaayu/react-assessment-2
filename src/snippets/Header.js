import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  let [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (loggedIn) {
      document.getElementById("loggedIn").style.display = "block";
      document.getElementById("loggedOut").style.display = "none";
    } else {
      document.getElementById("loggedIn").style.display = "none";
      document.getElementById("loggedOut").style.display = "block";
    }
  }, [loggedIn]);
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="">
            ABC Restaurant
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarMenu">
            <div className="ms-auto" id="loggedOut">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Login">
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="ms-auto" id="loggedIn">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Home">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/AddOrder">
                    Add Order
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/ViewReport">
                    View Report
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Logout">
                    Logout
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
