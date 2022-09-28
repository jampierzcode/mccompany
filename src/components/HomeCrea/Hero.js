import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Hero.css";
import lottie from "lottie-web";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";

// import portada_img from "../../assets/portada-marketing.png";
// import video from "../../assets/animacioncrea_2.avi";

const Hero = () => {
  const container = useRef(null);

  const [user, setUser] = useState({
    user_name: "",
    user_empresa: "",
    user_tipo_solicitud: "Tengo un Proyecto",
    user_email: "",
    user_telefono: "",
    user_message: "",
  });
  const [checkConsent, setCheckConsent] = useState(false);

  const check_consent = () => {
    setCheckConsent(!checkConsent);
  };

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setUser((prevalue) => {
      return {
        ...prevalue, // Spread Operator
        [name]: value,
      };
    });
  };
  const evaluar_form = () => {
    if (
      user.user_name !== "" &&
      user.user_email !== "" &&
      user.user_empresa !== "" &&
      user.user_message !== "" &&
      user.user_telefono !== "" &&
      user.user_tipo_solicitud !== ""
    ) {
      if (checkConsent === true) {
        return "sucess";
      } else {
        notify_warn(
          "Necesitas darnos consentimiento a tus datos personales para continuar"
        );
      }
    } else {
      notify_error("Falta agregar campos en el formulario");
    }
  };

  const enviar_formulario = async () => {
    let response = evaluar_form();
    if (response === "sucess") {
      var config = {
        method: "post",
        url: "https://www.mccompany.pe/sendemail-mccompany-crea/sendemail.php",
        headers: {
          "Content-Type": "application/json",
        },
        data: user,
      };

      await axios(config)
        .then(function (response) {
          notify_success(JSON.stringify(response.data));
          setUser({
            user_name: "",
            user_empresa: "",
            user_tipo_solicitud: "Tengo un Proyecto",
            user_email: "",
            user_telefono: "",
            user_message: "",
          });
          let user_name = document.querySelector('input[name=user_name]');
          let user_empresa = document.querySelector('input[name=user_empresa]');
          let user_telefono = document.querySelector('input[name=user_telefono]');
          let user_email = document.querySelector('input[name=user_email]');
          let user_message = document.querySelector('input[name=user_message]');
          let user_tipo_solicitud = document.querySelector('input[name=user_tipo_solicitud]');
          user_name.value = ""
          user_empresa.value = ""
          user_telefono.value = ""
          user_email.value = ""
          user_message.value = ""
          user_tipo_solicitud.value = "Tengo un Proyecto"
        })
        .catch(function (error) {
          notify_error(JSON.stringify(response.data));
        });

      console.log(user);
    }
  };
  // toast notify
  const notify_error = (event) => toast.error(event);
  const notify_success = (event) => toast.success(event);
  // const notify_promise = (event) =>
  //   toast.promise(event);
  const notify_warn = (event) => toast.warn(event);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./animacioncreaoficial.json"),
    });
  }, []);

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

      <div className="row container-crea position-relative bg-section-crea">
        <div className="col-lg-12 ">
          <div className="formulario_crea crea-form-shadow">
            <div className="header-form">
              <h1 className="text-center">Conversemos</h1>
            </div>
            <div className="body-form row">
              <div className="col-lg-12">
                <input
                  name="user_name"
                  onChange={handleChange}
                  placeholder="Nombre y Apellido"
                  type="text"
                  className="input-form"
                />
                <span className="line"></span>
              </div>
              <div className="col-lg-6">
                <input
                  name="user_empresa"
                  onChange={handleChange}
                  placeholder="Empresa"
                  type="text"
                  className="input-form"
                />
                <span className="line"></span>
              </div>
              <div className="col-lg-6">
                <select
                  name="user_tipo_solicitud"
                  onChange={handleChange}
                  className="select-form"
                >
                  <option value="Tengo un proyecto">Tengo un Proyecto</option>
                  <option value="Represento a una empresa">
                    Represento a una empresa
                  </option>
                </select>
                <span className="line"></span>
              </div>
              <div className="col-lg-6">
                <input
                  name="user_email"
                  onChange={handleChange}
                  placeholder="Correo"
                  type="email"
                  className="input-form"
                />
                <span className="line"></span>
              </div>
              <div className="col-lg-6">
                <input
                  name="user_telefono"
                  onChange={handleChange}
                  placeholder="Telefono"
                  type="text"
                  className="input-form"
                />
                <span className="line"></span>
              </div>
              <div className="col-lg-12">
                <input
                  name="user_message"
                  onChange={handleChange}
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
                  <input
                    onClick={check_consent}
                    type="checkbox"
                    className="form-check-input"
                  />
                  <label className="form-check-label" htmlFor="terms">
                    ¿Nos brinda su consentimiento para{" "}
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Tratamiento de datos personales
                    </a>
                  </label>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="col-12 text-center pt-3">
                  <button
                    onClick={enviar_formulario}
                    type="button"
                    className="crea-button btn send-contact"
                  >
                    !Empecemos!
                  </button>
                  <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  />
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
