import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <span className="logo-text">Hiring.com</span>
          <nav className="nav-menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">Features</Link>
              </li>
              <li>
                <Link to="/services">Benefits</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>
      </header>
      <main>
        <div className="chooseOurHiring">
          <div className="chooseUs">
            <div className="chooseContent">
              <h1>
                Choose Our Hiring Platform to get best Cadidates | Candidates on our platform is verified and Skilled  💻.
              </h1>
              <p>We are the best what we do You will never regret Once you join our platform We are leading Company.</p>
            </div>
            <div className="chooseButton">
              <Link to="/login">
                <button className="login-button login2">Register</button>
              </Link>
            </div>
          </div>
          <div className="imageDiv">
            <img src="img1.jpg" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Header;
