import React, { useState } from "react";
// import { Navbar, Container, Nav } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import "../components/HomeMc/Navbar.css";

const NavbarExample = () => {

  // setting mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // change nav color when scrolling
const [color, setColor] = useState(false);
const changeColor = ()=>{
  if(window.scrollY >= 90){
    setColor(true);
  }else{
    setColor(false);
  }
}
window.addEventListener('scroll', changeColor)

  // close menu on click
  const closeMenu = () => setClick(false);

  return (
    <>
      <div className={color ? "header header-bg": "header"}>
        <nav className="navbar">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
          </Link>
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={30} style={{ color: "#ffffff" }} />
            ) : (
              <FaBars size={30} style={{ color: "#ffffff" }} />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a href="#nosotros" onClick={closeMenu}>
                Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a href="#servicios" onClick={closeMenu}>
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a href="#equipo" onClick={closeMenu}>
                Equipo
              </a>
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

export default NavbarExample;
