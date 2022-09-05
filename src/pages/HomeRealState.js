import React, { useRef } from "react";
import Hero from "../components/HomeRealState/Hero";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import de template de properties
import TemplateProperty from "../components/HomeRealState/TemplateProperty";

// email js
import emailjs from "@emailjs/browser";

// react icons
import { FiMail, FiBox } from "react-icons/fi";
import { IoBedOutline } from "react-icons/io5";
import { BiBath } from "react-icons/bi";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

// bootstrap style
import { Row, Col, NavItem } from "react-bootstrap";

// style main principal real state
import "../css/homerealstate.css";

function HomeRealState() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_83emwcn",
        "template_dx3y2cn",
        form.current,
        "URWszTePZwETPO49m"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Hero />
      {/* section objetivo */}
      <div className="container_mc section-objetivo">
        <Row>
          <Col className="col-sm">
            <h1 className="primary-color-rs">
              Compra, Venta y Alquiler de Casas, Departamentos y Terrenos en
              Tacna
            </h1>
          </Col>
          <Col className="col-sm">
            <p className="dark-color-rs">
              Somos una empresa especializada en el sector Inmobiliario en
              Tacna. Contamos con una amplia cartera de casas, departamentos y
              terrenos (compra, venta y alquiler). Brindamos experiencia,
              seriedad, responsabilidad, garantía y seguridad. Venta y Alquiler
              de Casas y Departamentos en Tacna | Venta de Terrenos en Tacna |
              Asesoría y Marketing Inmobiliario.
            </p>
          </Col>
        </Row>
      </div>
      {/* section de listing proyectos */}
      <div className="container_mc section-listing-proyectos-destacados">
        <Row>
          <div className="header-section">
            <h1 className="index-title-section">
              <strong className="primary-color-rs">Propiedades</strong>
              <span>Destacadas</span>
            </h1>
          </div>
          <Swiper
            className="swiper-listing-destacados"
            loop={false}
            autoplay={{
              delay: 2500,
            }}
            effect={"fade"}
            modules={[Autoplay, Pagination, Scrollbar, A11y]}
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              900: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1040: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {TemplateProperty.map((property) => {
              return (
                <SwiperSlide key={property.id} className="card-list">
                  <Link
                    to={
                      "property/" + property.type_property + "/" + property.slug
                    }
                  >
                    <div className="img-card">
                      <img src={property.img_ref} alt="" />
                      <div className="full-block overlay transition"></div>
                      <div className="card-hover transition">
                        <span className="icon-click"></span>
                        <span className="click-text">
                          <span className="gold">Click</span> para explorar
                        </span>
                        <span className="arrow transition"></span>
                      </div>
                    </div>
                    <div className="description-card">
                      <p className="title-property">{property.ubicacion}</p>
                      <div className="card-amenities">
                        <div className="item-amenities">
                          <FiBox  className="secundary-color-rs"/>
                          {property.compartimentos[0]}
                        </div>
                        <div className="item-amenities">
                          <IoBedOutline className="secundary-color-rs"/>
                          {property.compartimentos[1]}
                        </div>
                        <div className="item-amenities">
                          <BiBath className="secundary-color-rs"/>
                          {property.compartimentos[2]}
                        </div>
                      </div>
                      <p className="precio-property">
                        Precio: {property.moneda + property.precio}
                      </p>
                    </div>
                  </Link>
                  <div className="float-task">
                    <p>{property.type_property}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Row>
      </div>

      {/* section banner publicidad */}
      <div className="container_mc section-banner">
        <Row>
          <Col className="col-sm">
            <h2 className="primary-color-rs">Te ayudamos a encontrar</h2>
            <h1>Tu Hogar Ideal y perfecto</h1>
            <p>Contáctenos:</p>
            <div className="social-icons">
              <div className="box-icon">
                <FaWhatsapp /> <p>+51 946 943 998</p>
              </div>
              <div className="box-icon">
                <FaPhoneAlt /> <p>+51 946 943 998</p>
              </div>
              <div className="box-icon">
                <FiMail /> <p>soporte@mccompany.pe</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      {/* formulario de contacto */}
      <div className="container_mc section-formulario-contacto">
        <Row>
          <Col className="col-sm">
            <img
              src="https://atnprodstge.blob.core.windows.net/atnassets/2015/10/ico-destinonegocio-cita-con-inversionistas-istock-getty-images-1030x687-1.jpg"
              alt=""
            />
          </Col>
          <Col className="col-sm col-formulario">
            <form className="formulario-mc" ref={form} onSubmit={sendEmail}>
              <h1>
                Invierte en nuestros proyectos...¡Rentabiliza tus ahorros!
              </h1>
              <p>Déjanos tus datos y nos pondremos en contacto</p>
              <div className="box-input">
                <label>Name</label>
                <input
                  placeholder="Ingresa tu nombre"
                  type="text"
                  name="user_name"
                />
              </div>
              <div className="box-input">
                <label>Email</label>
                <input
                  placeholder="Ingresa tu correo electronico"
                  type="email"
                  name="user_email"
                />
              </div>
              <div className="box-input">
                <label>Message</label>
                <textarea
                  className="Ingresa el mensaje de tu consulta"
                  name="message"
                />
              </div>
              <input
                className="btn-submit-mc bg-fuerte-rs light-color-rs"
                type="submit"
                value="Send"
              />
            </form>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default HomeRealState;
