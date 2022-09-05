import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";

import "./Hero.css";
import "./Propiedad.css";

// import de template de properties
import TemplateProperty from "./TemplateProperty";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Thumbs,
  Pagination,
  Scrollbar,
  A11y,
  Navigation,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// bottstrap
import { Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

// email js
import emailjs from "@emailjs/browser";

// react icons
// import { IoBedOutline } from "react-icons/io5";
// import { BiBath } from "react-icons/bi";
import { HiCheckCircle } from "react-icons/hi";

// component mapa
import Mapa from "./Mapa";

const Propiedad = () => {
  const [activeThumb, setActiveThumb] = useState();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_83emwcn",
        "template_propiedad",
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

  // funciones handle para modales
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let { titleCasa } = useParams();

  const property_item = TemplateProperty.find(
    (element) => element.slug === titleCasa
  );
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reserva una visita con nosotros</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="formulario-mc" ref={form} onSubmit={sendEmail}>
            <h2>Pedir una cita a esta propiedad</h2>
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
              <label>Telefono</label>
              <input
                placeholder="Ingresa tu telefono electronico"
                type="text"
                name="user_telefono"
              />
            </div>
            <div className="box-input">
              <label>Fecha de la cita</label>
              <input
                placeholder="Ingresa tu telefono electronico"
                type="date"
                name="user_fecha"
              />
            </div>
            <div className="box-input">
              <label>Message</label>
              <textarea
                className="Ingresa el mensaje de tu consulta"
                name="message"
                placeholder="Ingresa el mensaje de tu consulta"
              />
            </div>
            <input className="btn-submit-mc" type="submit" value="Enviar" />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
      
      <div className="container_mc section-preview">
        <Row>
          <Col className="col-md-8 nav-gallery detail-property">

            <h1>{property_item.ubicacion}</h1>
            
            <p className="precio-property primary-color-rs">
              <span className="moneda">Precio: {property_item.moneda}</span>
              {property_item.precio}
            </p>
            <Swiper
              className="zoom-gallery"
              effect={"fade-in"}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Thumbs, Navigation]}
              spaceBetween={50}
              thumbs={{ swiper: activeThumb }}
              slidesPerView={1}
            >
              {property_item.gallery.map((item) => {
                return (
                  <SwiperSlide key={item.foto}>
                    <img src={item.foto} alt="" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            {/* thumbimg */}
            <div className="thumbs-container">
              <Swiper
                className="thumb-gallery"
                onSwiper={setActiveThumb}
                modules={[Navigation, Thumbs]}
                effect={"fade"}
                slidesPerView={4}
                spaceBetween={10}
                navigation={true}
              >
                {property_item.gallery.map((item) => {
                  return (
                    <SwiperSlide>
                      <img src={item.foto} alt="" />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <p className="content-property">{property_item.detalles}</p>
            {property_item.tags.map((tag) => {
              return (
                <div className="tag-detalle">
                  <h1 className="index-detalle">{tag.nombre_tag}</h1>
                  <div className="box-detalle-tag grid-4c-rs">
                    {tag.detail_tag.map((tag_name) => {
                      return (
                        <div className="item-detalle">
                          <HiCheckCircle /> {tag_name}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </Col>
          <Col className="col-md-3">
            {/* contact agente property */}
            <div className="box-agent-property bg-fuerte-rs">
              <div className="header-box">
                <img
                  src="https://img.freepik.com/foto-gratis/agente-inmobiliario-masculino-confiado-hombre-negocios-corredor-traje-apuntando-dedo-arriba-mostrando-publicidad-superior-trato-mercado-pie-sobre-fondo-blanco_176420-45261.jpg"
                  alt="perfil agent"
                />
              </div>
              <div className="body-box">
                <h3>Ag. Maicol Bohorquez</h3>
                <span>Type User: Agent Inmobiliario</span>
              </div>
              <div className="bottom-box">
                <div className="btn-contact">
                  <button
                    onClick={handleShow}
                    className="btn-contact-agent bg-primary-rs"
                  >
                    Solicitar una visita
                  </button>
                  <button
                    onClick={handleShow}
                    className="btn-contact-agent bg-secondary-rs"
                  >
                    Llamame
                  </button>
                </div>
              </div>
            </div>
            {/* google maps */}

            <div className="google-contact">
              <Mapa src={property_item.mapa} />
            </div>
            {/* formulario de contacto de propiedad */}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Propiedad;
