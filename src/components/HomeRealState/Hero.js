import React from "react";
import { FiHome } from "react-icons/fi";

import "./Hero.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <Swiper
      id="home-realstate"
      className="hero portada-realState"
      // loop={true}
      // autoplay={{
      //   delay: 2500,
      // }}
      effect={"fade"}
      modules={[Autoplay, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        {/* <img src={portada} alt="" /> */}
        <div className="content-portada bg-fuerte-rs">
          <div className="row">
            <div className="col-sm">
              <h1>Descubre tu propiedad ideal</h1>
              <h3>
                Compra, Venta y Alquiler de cómodas propiedades en la ciudad de
                Tacna
              </h3>
              <div className="form-search-property">
                <div className="input-form">
                  <FiHome />
                  <input
                    type="text"
                    name="name_property"
                    placeholder="Ingresa el nombre de la propiedad"
                  />
                </div>
                <button className="bg-primario search-btn-property">
                  Buscar
                </button>
              </div>
              <div className="likes-comunity grid-3c-rs">
                <div className="box-likes">
                  <h1>9K <span className="tercer-color-rs">+</span></h1>
                  <p className="detail-like">Proyectos asegurados</p>
                </div>
                <div className="box-likes">
                  <h1>2K <span className="tercer-color-rs">+</span></h1>
                  <p className="detail-like">apacitaciones realizadas a dia de hoy</p>
                </div>
                <div className="box-likes">
                  <h1>28K <span className="tercer-color-rs">+</span></h1>
                  <p className="detail-like">Usuarios que nos siguen en Facebook</p>
                </div>
              </div>
            </div>
            <div className="col-sm img-portada">
              <img
                src="https://www.cruzescalanteconstructores.com/wp-content/uploads/2021/07/Departamentos-en-Quito-Norte-edificio-Cataleya.jpg"
                width="100%"
                alt="img_real state"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
