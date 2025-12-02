// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { useMenu } from "../hooks/useMenu";

const Navbar = () => {
  const { toggleTheme } = useTheme();
  const { isMenuActive, toggleMenu, closeMenu } = useMenu();

  return (
      <div>
      <nav id="NavBar" className="navbar">
        <h1 className="logo">
          Sriram Srinivasa Raghavan
          <button
              className="theme-toggle"
              id="theme-toggle"
              onClick={toggleTheme}
          >
            <div className="toggle">
              <div id="imgcontainer">
                <img
                    className="dark__light buttonImage"
                    src="image/day-and-night.png"
                    alt="Toggle theme"
                />
              </div>
            </div>
          </button>
        </h1>

        <button id="hamburger" className="hamburger" onClick={toggleMenu}>
          ☰
        </button>

        <ul className={`nav-links ${isMenuActive ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={closeMenu}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/learning" onClick={closeMenu}>
              Learning to Learn
            </Link>
          </li>
          <li>
            <Link to="/resources" onClick={closeMenu}>
              Resources
            </Link>
          </li>
          <li>
            <Link to="/motivation" onClick={closeMenu}>
              Motivation
            </Link>
          </li>
          {/*<li>*/}
          {/*  <Link to="/contact" onClick={closeMenu}>*/}
          {/*    Contact*/}
          {/*  </Link>*/}
          {/*</li>*/}
        </ul>
      </nav>
  <div class="b-example-divider"></div>
  </div>
  );
};

export default Navbar;
