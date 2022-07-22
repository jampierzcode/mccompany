import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import Hero from "../components/HomeMc/Hero";
// iconos
import { FiChevronsRight } from "react-icons/fi";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import aos
import "aos/dist/aos.css";
import "../css/home.css";
import Aos from "aos";

const HomeMc = () => {
  Aos.init({ offset: 20, mirror: true, duration: 1500 });
  const agentes_info = [
    {
      id: 1,
      nombre: "Carme Luz",
      img: "https://www.solucionesespeciales.net/wp-content/uploads/Comprar-una-vivienda-y-evitar-al-agente-inmobiliario.jpg",
      skills:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et non doloremque modi aperiam ea libero dicta omnis eos repudiandae id? Nostrum eius dolorum maiores excepturi illum aperiam error cum adipisci.",
      animation: "fade-left",
      position_reverse: "false",
    },
    {
      id: 2,
      nombre: "Maicol Bohorquez",
      img: "https://previews.123rf.com/images/dolgachov/dolgachov1902/dolgachov190201157/116790585-empresario-indio-o-agente-inmobiliario-en-la-oficina-vac%C3%ADa.jpg",
      skills:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et non doloremque modi aperiam ea libero dicta omnis eos repudiandae id? Nostrum eius dolorum maiores excepturi illum aperiam error cum adipisci.",
      animation: "fade-right",
      position_reverse: "true",
    },
  ];
  const servicios_info = [
    {
      id: 1,
      nombre: "MC Marketing digital",
      path: "servicios/marketing",
      img: "https://d3nqlc6zkdn9bc.cloudfront.net/wp-content/uploads/2022/05/30181901/Marketing-digital-jelpit-abc-compressed.jpg",
      skills:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et non doloremque modi aperiam ea libero dicta omnis eos repudiandae id? Nostrum eius dolorum maiores excepturi illum aperiam error cum adipisci.",
      animation: "fade-up",
    },
    {
      id: 2,
      nombre: "MC Real State",
      path: "servicios/real_state",
      img: "https://blog.hubspot.com/hubfs/Sales_Blog/real-estate-business-compressor.jpg",
      skills:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et non doloremque modi aperiam ea libero dicta omnis eos repudiandae id? Nostrum eius dolorum maiores excepturi illum aperiam error cum adipisci.",
      animation: "fade-down",
    },
    {
      id: 3,
      nombre: "MC Businees School",
      path: "servicios/business_scholl",
      img: "http://www.aspirebarcelona.eu/assets/images/blog/european-program.jpg",
      skills:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et non doloremque modi aperiam ea libero dicta omnis eos repudiandae id? Nostrum eius dolorum maiores excepturi illum aperiam error cum adipisci.",
      animation: "fade-up",
    },
  ];
  return (
    <div className="mc-page">      
      <Hero />
      {/* SECTION DE NOSOTROS */}
      <div id="nosotros" className="container_mc section_about">
        <div className="header_section">
          <h1 className="index_section_mcs">Nosotros</h1>
        </div>
        {agentes_info.map((item) => {
          return (
            <Row className={item.position_reverse !== "false" ? "row_invert_v" : ""}>
              <Col sm data-aos={item.animation} className="flex_h hh_flex ">
                <img
                  className="img_circle"
                  width={"100%"}
                  src={item.img}
                  alt=""
                />
                <div>
                  <h2>{item.nombre}</h2>
                  <span className="sub_title">Agente Inmobiliario</span>
                  <p className="description_context">{item.skills}</p>
                  <button className="btn_mc btn_primary hover_up">
                    <a href="#">Ver Proyectos <FiChevronsRight /></a> 
                  </button>
                </div>
              </Col>
              {/* <Col sm className=" flex_h hv_flex ">
                <h2>{item.nombre}</h2>
                <span className="sub_title">Agente Inmobiliario</span>
                <p className="description_context">{item.skills}</p>
                <button className="btn_mc btn_primary hover_up">
                  Ver Proyectos <FiChevronsRight />
                </button>
              </Col> */}
            </Row>
          );
        })}
      </div>
      {/* SECTION DE SERVICIOS */}
      <Container id="servicios" className="container_mc">
        <div className="header_section">
          <h1 className="index_section_mcs">Nuestros servicios</h1>
        </div>
        <Row className="carrusel_card">
          {servicios_info.map((item) => {
            return (
              <Col
                data-aos={item.animation}
                data-aos-duration="500"
                sm
                md
                // data-aos={item.animation}
                className="card_item_mc"
              >
                <img
                  className="img_card"
                  width={"100%"}
                  src={item.img}
                  alt=""
                />
                <div className="card_body_item">
                  <h2>{item.nombre}</h2>
                  <p className="description_card">{item.skills}</p>
                  <button className="btn_mc btn_primary hover_up">
                    <Link to={item.path}>Ver Servicio <FiChevronsRight /></Link>
                  </button>
                </div>
              </Col>
            );
          })}
          {/* <Outlet /> */}
        </Row>
      </Container>
      {/* SECTION DE AGENTES */}
      <Container id="equipo" className="container_mc">
        <div className="header_section">
          <h1 className="index_section_mcs">Nuestro Equipo</h1>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            940: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          // scrollbar={{ draggable: true }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img
              src="https://www.aprendemas.com/es/blog/images/2019/05/agente_inmobiliario.jpeg"
              alt=""
            />
            <div className="agent-title">
              <p>Nombre...</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://assets.iproup.com/cdn-cgi/image/w=880,f=webp/https://assets.iproup.com/assets/jpg/2020/06/10195.jpg"
              alt=""
            />
            <div className="agent-title">
              <p>Nombre...</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://coachricardogarza.com/wp-content/uploads/2021/07/empresario-ayuda-min-1280x720.jpg"
              alt=""
            />
            <div className="agent-title">
              <p>Nombre...</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.1001propiedades.com/wp-content/uploads/2020/04/que-necesitas-para-ser-corredor-inmobiliario.jpg"
              alt=""
            />
            <div className="agent-title">
              <p>Nombre...</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.aprendemas.com/es/blog/images/2019/05/agente_inmobiliario.jpeg"
              alt=""
            />
            <div className="agent-title">
              <p>Nombre...</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default HomeMc;
