import React from "react";
import { Link } from "react-router-dom";

// react icons
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./Footer.css";
const FooterCrea = () => {
  return (
    <>
      <div className="section-crea footer-crea">
        <div className="row container-crea">
          <div className="col-lg-4">
            <img
              className="logo-footer"
              src={require("../../assets/logo_creaq.png")}
              alt=""
            />
            <h3 className="info-contact">Av. Bolognesi N~456</h3>
            <h3 className="info-contact">+51 946562325</h3>
            <h3 className="info-contact">crea@mccompany.pe</h3>
            <div className="redes-social">
              <a href="" target="_blank">
                <FaFacebook />
              </a>
              <a href="" target="_blank">
                <FaWhatsapp />
              </a>
              <a href="" target="_blank">
                <FaInstagram />
              </a>
            </div>
            {/* <ul className="menu-footer">
              <li>
                <Link to="/servicios/crea">Home</Link>
              </li>
              <li>
                <Link to="/servicios/crea/portafolio">Portafolio</Link>
              </li>
              <li>
                <Link to="/servicios/crea/blog">
                  Blog
                </Link>
              </li>
            </ul> */}
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-6">
            <div className="contact-fazt">
                <h4>Suscribete para enterarte novedades</h4>
                <div className="form-fazt-contact">
                    <input placeholder="Ingresa tu correo electrónico" type="text"  name="email-contact"/>
                    <div className="contact-submit">
                        <button>Enviar</button>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className="bar-bottom-footer col-lg-12">
          <p>2022 Crea | Todos los derechos reservados</p>
        </div>
      </div>
      
      
    </>
  );
};

export default FooterCrea;
