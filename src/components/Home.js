import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
// iconos
import {FiChevronsRight} from "react-icons/fi"


import "aos/dist/aos.css";
import "../css/home.css";
import Aos from "aos";
const Home = () => {
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
      position_reverse: "row_invert_h",
    },
  ];
  return (
    <>
      <Carousel variant="dark" className="slide_portada_home">
        <Carousel.Item className="item-carrusel">
          <img
            className="d-block w-100 img-slider"
            src="http://static1.squarespace.com/static/54d262afe4b05051e74b5892/t/5c4904537924e8130fb6c415/1548289110941/building.jpg?format=1500w"
            alt="First slide"
          />
          <Carousel.Caption className="description-slider">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item-carrusel">
          <img
            className="d-block w-100 img-slider"
            src="https://inmobiliare.com/himalaya/wp-content/uploads/2020/12/Perspectiva-del-Real-Estate-para-los-siguientes-meses-inmobiliare-2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="description-slider">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item-carrusel">
          <img
            className="d-block w-100 img-slider"
            src="https://www.colliers.com/-/media/images/colliers/unitedstates/national/optimized-landing-pages/home/04_homepage_propertiesbigimage_2480x1152.ashx?bid=f04193e616644a9ea9ca65ced711943e&h=1151&w=2480&hash=DF961DA669E63710F0BEF502C30AEBA7"
            alt="Third slide"
          />
          <Carousel.Caption className="description-slider">
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container className="container_mc">
        <h1 className="index_section_mcs">Nosotros</h1>
        {agentes_info.map((item) => {
          return (
            <Row className={item.position_reverse + "row_mc"}>
              <Col data-aos={item.animation} xs="6" className="flex_h hh_flex col_mc">
                <img className="img_circle" width={"100%"} src={item.img} alt="" />
              </Col>
              <Col xs="6" className=" flex_h hv_flex col_mc">
                <h2>{item.nombre}</h2>
                <span className="sub_title">Agente Inmobiliario</span>
                <p className="description_context">{item.skills}</p>
                <button className="btn_mc btn_primary hover_up">Ver Proyectos <FiChevronsRight/></button>
              </Col>
            </Row>
          );
        })}
      </Container>
    </>
  );
};

export default Home;
