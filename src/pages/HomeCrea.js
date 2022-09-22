import React, { useEffect, useRef, useState } from "react";

import lottie from "lottie-web";
import Hero from "../components/HomeCrea/Hero";
import "../css/homecrea.css";

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

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// img about
import port_about from "../components/HomeCrea/aboutcrea.png";
import help_crea from "../components/HomeCrea/help_crea-01.svg";
import { FiActivity } from "react-icons/fi";
import Acordion from "../components/HomeCrea/Acordion";
import FooterCrea from "../components/HomeCrea/FooterCrea";

const HomeCrea = () => {
// init data aos
Aos.init({ offset: 20, mirror: true, duration: 400 });


  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../components/HomeCrea/animacionhistoriacrea.json"),
    });
  }, []);

  const [acordion, setAcordion] = useState("Crecimiento de Redes Sociales:");


  return (
    <>
      <Hero/>
      <div className="section-crea bg-section-crea">
        <div className="row container-crea">
          <div className="col-lg-6 h-flex-crea-center-colum">
            <h1 className="index-section-name" data-aos="fade-up">Sobre <b className="">Crea</b> </h1>
            <h2 className="subindex-section-name">
              Un gran equipo multidisciplinario
            </h2>
            <p className="text-crea">
              que busca transformar tu marca, desarrollar un nuevo negocio,
              llevar al mundo una gran idea y contar historias sobre productos y
              servicios de la forma más creativa e impactante
            </p>
            <div className="pt-3">
              <p className="text-crea-comment">
                Una agencia de marketing digital que provee servicios integrales
                de comunicación y diseño para todo tipo de empresa y sector.
              </p>
            </div>
            <div className="col-lg-12 pt-3">
              <button type="button" className="crea-button btn">
                !Conversemos!
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={port_about}  alt="" />
          </div>
        </div>
        {/* <div className="row container-crea">
          <div className="col-12 box-marca-crea pt-3">
            <div className="box-item-crea"></div>
          </div>
        </div> */}
      </div>
      <div className="section-crea">
        <div className="row container-crea">
          <div className="col-lg-12">
            <h1 className="index-section-name">Historia <b className="">de Crea</b> </h1>
            <div className="container-historia" ref={container}></div>
          </div>
        </div>
      </div>
      <div className="section-crea">
        <div className="row container-crea">
          <div className="col-lg-6">
            <h1 className="index-section-name mt-3">¿Qué <b className="">hacemos?</b></h1>
            <ul className="acordeon-crea">
              <Acordion
                title="Crecimiento de Redes Sociales:"
                content="Creamos contenido de acuerdo a tu empresa, interactuamos y
                  ofrecemos valor para conformar una comunidad digital
                  comprometida con tu marca y dispuesta a cerrar futuras ventas."
                acordion={acordion}
                setAcordion={setAcordion}
              />
              <Acordion
                title="Generación de Leads:"
                content="Ponemos en marcha diferentes estrategias de campañas para
                aumentar tu lista de contactos con clientes potenciales,
                interesados en tus productos o servicios y con alta
                posibilidad de compra."
                acordion={acordion}
                setAcordion={setAcordion}
              />
              <Acordion
                title="Aumento de ventas:"
                content="Estudiamos tu mercado para tener claro tu target y aumentar tu
                tráfico para que obtengas más clientes definiendo tu buyer
                persona para una mejor atención."
                acordion={acordion}
                setAcordion={setAcordion}
              />
              <Acordion
                title="Posicionamiento Orgánico:"
                content="hacemos que tus redes sociales, venta de productos y servicios
                tengan posicionamiento orgánico a través de estrategias de
                difusión de valor, crecimiento de marca personal y uso de
                herramientas digitales."
                acordion={acordion}
                setAcordion={setAcordion}
              />
              <Acordion
                title="Diseño de página web:"
                content="Utilizamos la mejor tecnología para crear un sitio web
                asombroso que cautive a tus usuarios, con un Concepto claro,
                diseño atractivo y desarrollo funcional que sumara valor
                agregado a tu empresa."
                acordion={acordion}
                setAcordion={setAcordion}
              />
            </ul>
          </div>
          <div className="col-lg-6">
            <img src={help_crea} alt="" />
          </div>
        </div>
      </div>
      <div className="section-crea">
        <div className="row container-crea">
          <div className="col-lg-12">
            <h1 className="index-section-name">Nuestro <b className="">Portafolio</b></h1>
            <h2 className="subindex-section-name">
              Conectamos personas con marcas a través de grandes experiencias
              digitales.
            </h2>
          </div>
          <div className="col-lg-12 pt-4">
            <div className="crea-mansory">
              <a target="_blank" href="https://inviersis.pe/qhawana" className="mansory-item">
                <div className="bg">
                  <img src={require("../components/HomeCrea/portafolio/qhawana.png")} alt="" />
                </div>
                <div className="name">
                  <h6>Proyecto Qhawana</h6>
                </div>
              </a>
              <a target="_blank" href="https://jtamazoncargo.com" className="mansory-item">
              <div className="bg">
                  <img src={require("../components/HomeCrea/portafolio/amazoncargo.png")} alt="" />
                </div>
                <div className="name">
                  <h6>Sitio web de courier: Amazon Cargo</h6>
                </div>
              </a>
              <a target="_blank" href="https://hotelemperadortacna.com"className="mansory-item">
              <div className="bg">
                  <img src={require("../components/HomeCrea/portafolio/hotelemperador.png")} alt="" />
                </div>
                <div className="name">
                  <h6>Sitio web hotel: Hotel emperador Tacna</h6>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section-crea">
        <div className="row container-crea">
          <div className="col-lg-12">
            <h1 className="index-section-name">Conoce <b className="">al Equipo</b></h1>
            <h2 className="subindex-section-name">
              Nuestros Profesionales
            </h2>
          </div>
          <div className="col-lg-12 pt-4">
          <Swiper className="equipo-listing-crea"
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
        >
          <SwiperSlide className="card-equipo-crea">
            <img className="img-crea-equipo"
              src="https://coachricardogarza.com/wp-content/uploads/2021/07/empresario-ayuda-min-1280x720.jpg"
              alt=""
            />
            <div className="agent-title-crea">
              <p className="bold-text-card">Jampier Vasquez</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptates porro aliquam.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="card-equipo-crea">
            <img className="img-crea-equipo"
              src="https://coachricardogarza.com/wp-content/uploads/2021/07/empresario-ayuda-min-1280x720.jpg"
              alt=""
            />
            <div className="agent-title-crea">
              <p className="bold-text-card">Maicol Bohorquez</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptates porro aliquam.</p>
            </div>
          </SwiperSlide>
          
        </Swiper>
          </div>
        </div>
      </div>
      <FooterCrea/>
    </>
  );
};

export default HomeCrea;
