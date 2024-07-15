import React from "react";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import "./Header.css";

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid flex-end">
        <Link className="navbar-brand" to="/">
          <div className="logo">
            <TiShoppingCart />
          </div>
          Trand Mall
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/login">
          <button className="btnp btn-sm">Login</button>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
