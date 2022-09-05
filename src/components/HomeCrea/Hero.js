import React, {useEffect, useRef} from "react";
import "./Hero.css";
import lottie from "lottie-web";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import portada_img from "../../assets/portada-marketing.png";
// import video from "../../assets/animacioncrea_2.avi";

const Hero = () => {
const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require("./animacioncreaoficial.json")
    })
  }, [])
  
  return (
    <>
      <Swiper
        className="hero portada-mc-index"
        autoplay={{
          delay: 2500,
        }}
        effect={"fade"}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
      >
        <SwiperSlide>
          <div className="back-slider"></div>
          <div className="content-portada">
            <div className="row">
              <div className="col-lg-6"> 
                {/* <video autoPlay muted src={video}></video> */}
                {/* <img src={portada_img} alt="" /> */}
                <h1>Marketing digital pensado en conectar con los usuarios</h1>
                <p>
                  De soluciones digitales para pequeñas y grandes empresas a
                  nivel nacional
                </p>
                <br />                
                {/* <div className="container-svg" ref={container}></div> */}
              </div>
            </div>
          </div>
          <div className="crea-slider-mask"></div>
        </SwiperSlide>
      </Swiper>

      <div className="row container-crea position-relative">
        <div className="col-lg-12 ">
          <div className="formulario_crea crea-form-shadow">
            <div className="header-form">
              <h1 className="text-center">Conversemos</h1>
            </div>
            <div className="body-form row">
              <div className="col-lg-12">
                <input
                  placeholder="Nombre y Apellido"
                  type="text"
                  className="input-form"
                />
                <span className="line"></span>
              </div>
              <div className="col-lg-6">
                <input
                  placeholder="Empresa"
                  type="text"
                  className="input-form"
                />
                <span className="line"></span>
              </div>
              <div className="col-lg-6">
                <select name="" id="" className="select-form">
                  <option value="Tengo un proyecto">Tengo un Proyecto</option>
                  <option value="Represento a una empresa">
                    Represento a una empresa
                  </option>
                </select>
                <span className="line"></span>
              </div>
              <div className="col-lg-6">
                <input
                  placeholder="Correo"
                  type="email"
                  className="input-form"
                />
                <span className="line"></span>
              </div>
              <div className="col-lg-6">
                <input
                  placeholder="Telefono"
                  type="text"
                  className="input-form"
                />
                <span className="line"></span>
              </div>
              <div className="col-lg-12">
                <input
                  placeholder="Mensaje"
                  type="text"
                  className="input-form"
                />
                <span className="line"></span>
              </div>
            </div>
            <div className="footer-form row">
              <div className="col-lg-12">
                <div className="form-check mt-3">
                  <input type="checkbox" className="form-check-input" />
                  <label className="form-check-label" htmlFor="terms">
                    ¿Nos brinda su onsdentimiento para{" "}
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Tratamiento de datos personales
                    </a>
                  </label>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="col-12 text-center pt-3">
                  <button
                    type="button"
                    className="crea-button btn send-contact"
                  >
                    !Empecemos!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
