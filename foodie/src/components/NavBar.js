import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import logo from "../assets/NavBar.png";
import "../pages/Salads";
import "../pages/Meals";

function NavBar() {
  return (
    <nav className="navbar">
      
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Foody Logo" className="logo-img" />
        </Link>
      </div>

      
      <div className="navbar-center">
        <p className="categories-info">
          Click Here To Share a Taste and Discover More
        </p>
        <div className="dropdown">
          <button className="dropbtn">Categories</button>
          <div className="dropdown-content">
            <Link to="/salads">Salads</Link>
            <Link to="/soups">Soups</Link>
            <Link to="/meals">Meals</Link>
            <Link to="/desserts">Desserts</Link>
          </div>
        </div>
      </div>

      
    </nav>
  );
}

export default NavBar;