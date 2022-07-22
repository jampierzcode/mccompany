import React from "react";
import "./Hero.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import portada from "../../assets/hero3.jpg";
import portada2 from "../../assets/hero2.jpg";
import portada3 from "../../assets/hero_departamento.jpg";
import portada4 from "../../assets/hero_terrenos.jfif";
const Hero = () => {
  return (
    // <div className='hero'>
    //     <div className='content'>
    //         <p>Contáctanos</p>
    //         <p>+51 915096462</p>
    //         <h1>Corporación</h1>
    //         <h2>Dedicada a brindar servicios de ...</h2>
    //         <button href='/' className='mc-btn bg-primario'>Whatsapp</button>
    //     </div>
    // </div>
    <Swiper
      className="hero portada-realState"
      loop={true}
      autoplay={{
        delay: 2500,
      }}
      effect={"fade"}
      modules={[Autoplay, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
    //   navigation={true}
      // scrollbar={{ draggable: true }}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src={portada} alt="" />
        <div className="content-portada">
          <div className="row">
            <div className="col-sm">
              <h1>Casas</h1>
              <h3>Dedicada a brindar servicios de ...</h3>
              {/* <button href="/" className="mc-btn bg-primario">
                Whatsapp
              </button> */}
            </div>
            <div className="col-sm"></div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={portada3} alt="" />
        <div className="content-portada">
          <div className="row">
            <div className="col-sm">
              <h1>Departamentos</h1>
              <h3>Dedicada a brindar servicios de ...</h3>
              {/* <button href="/" className="mc-btn bg-primario">
                Whatsapp
              </button> */}
            </div>
            <div className="col-sm"></div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={portada2} alt="" />
        <div className="content-portada">
          <div className="row">
            <div className="col-sm">
              <h1>Casa de Playa</h1>
              <h3>Dedicada a brindar servicios de ...</h3>
              {/* <button href="/" className="mc-btn bg-primario">
                Whatsapp
              </button> */}
            </div>
            <div className="col-sm"></div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={portada4} alt="" />
        <div className="content-portada">
          <div className="row">
            <div className="col-sm">
              <h1>Terrenos</h1>
              <h3>Dedicada a brindar servicios de ...</h3>
              {/* <button href="/" className="mc-btn bg-primario">
                Whatsapp
              </button> */}
            </div>
            <div className="col-sm"></div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
