import React from "react";
import Hero from "../components/HomeRealState/Hero";

// react icons
import { FiChevronDown } from "react-icons/fi";

import { Container, Row, Col } from "react-bootstrap";

import "../css/homerealstate.css"

function HomeRealState() {
  return (
    <>
      <Hero />
      <dvi className="menu-filtros">
        <div className="box-menu">
          <ul className="listing-menu">
            <li className="link-item">
              <span>Terrenos  <FiChevronDown/></span>
              <ul className="hidden dropdown-menu-filter">
                <li>Venta de Terrenos Industriales</li>
                <li>Venta de Terrenos en Playas</li>
                <li>Venta de Terrenos Urbanos</li>
                <li>Venta de Terrenos Agricolas</li>
              </ul>
            </li>
            <li className="link-item">
              <span>Casas <FiChevronDown/></span>
              <ul className="hidden dropdown-menu-filter">
                <li>Venta de Terrenos Industriales</li>
                <li>Venta de Terrenos en Playas</li>
                <li>Venta de Terrenos Urbanos</li>
                <li>Venta de Terrenos Agricolas</li>
              </ul>
            </li>
            <li className="link-item">
              <span>Departamentos <FiChevronDown/></span>
              <ul className="hidden dropdown-menu-filter">
                <li>Venta de Terrenos Industriales</li>
                <li>Venta de Terrenos en Playas</li>
                <li>Venta de Terrenos Urbanos</li>
                <li>Venta de Terrenos Agricolas</li>
              </ul>
            </li>
            <li className="link-item">
              <span>Alquileres <FiChevronDown/></span>
              <ul className="hidden dropdown-menu-filter">
                <li>Venta de Terrenos Industriales</li>
                <li>Venta de Terrenos en Playas</li>
                <li>Venta de Terrenos Urbanos</li>
                <li>Venta de Terrenos Agricolas</li>
              </ul>
            </li>
          </ul>
        </div>
      </dvi>
      <Container className="container_mc">
        <Row>
          <Col className="col-sm">
            <h2>
              Compra, Venta y Alquiler de Casas, Departamentos y Terrenos en
              Piura
            </h2>
          </Col>
          <Col className="col-sm">
            <p>
              Somos una empresa especializada en el sector Inmobiliario en
              Piura. Contamos con una amplia cartera de casas, departamentos y
              terrenos (compra, venta y alquiler). Brindamos experiencia,
              seriedad, responsabilidad, garantía y seguridad. Venta y Alquiler
              de Casas y Departamentos en Piura | Venta de Terrenos en Piura |
              Asesoría y Marketing Inmobiliario.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomeRealState;
