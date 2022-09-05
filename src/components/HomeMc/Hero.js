import React from "react";
import "./Hero.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import portada from "../../assets/hero.jpg";
import portada_img from "../../assets/equipo de trabajo.png";
import portada_img2 from "../../assets/portada_mc2.png";
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
      // scrollbar={{ draggable: true }}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src="https://biznespolsha.com/wp-content/uploads/2020/06/consulting2.jpg" alt="" />
        <div className="content-portada">
          <div className="row">
            <div className="col-sm">
              
              <h1>Corporación dedicada al desarrollo</h1>
              <h2>De soluciones digitales para pequeñas y grandes empresas a nivel nacional</h2>
              <br />
              <a target="_blank" href="https://api.whatsapp.com/send?phone=51946943998&text=Hola%20estoy%20interesado%20en%20uno%20de%20sus%20servicios%20de:%20" className="mc-btn bg-dorado">
                Whatsapp
              </a>
            </div>
            <div className="col-sm">
              {/* <img src={portada_img} alt="" /> */}
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
