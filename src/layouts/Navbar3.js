import React, { useState } from "react";
// import { Navbar, Container, Nav } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo_creaq.png";
import "../components/HomeCrea/Navbar.css";

const Navbar3Example = () => {
  // setting mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
      // document.getElementById("logo").src=logo2;
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  // close menu on click
  const closeMenu = () => setClick(false);

  return (
    <>
      <div
        className={
          color
            ? "header header-bg-crea"
            : "header header-bg-crea"
        }
      >
        <nav className="navbar">
          <Link to="/servicios/crea" className="logo" id="logo">
            <img src={logo} alt="logo" />
          </Link>
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={30} style={{ color: "#fff" }} />
            ) : (
              <FaBars size={30} style={{ color: "#ffffff" }} />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/servicios/crea" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/servicios/crea/portafolio" onClick={closeMenu}>
                Portafolio
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/servicios/crea/blog" onClick={closeMenu}>
                Blog
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/servicios/crea/cursos" onClick={closeMenu}>
                Cursos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#contac-form" onClick={closeMenu}>
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default Navbar3Example;
