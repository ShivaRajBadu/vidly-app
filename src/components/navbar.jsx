import React from "react";
import { NavLink, Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-light bg-light mx-5 mb-4 ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="">
            Vidly
          </Link>

          <div className="navbar-nav me-auto ">
            <NavLink className="nav-link " aria-current="page" to="/">
              Movies
            </NavLink>
            <NavLink className="nav-link" to="/customers">
              Customers
            </NavLink>
            <NavLink className="nav-link" to="/rental">
              Rental
            </NavLink>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
