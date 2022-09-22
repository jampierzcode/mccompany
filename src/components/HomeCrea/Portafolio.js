import React from "react";
import FooterCrea from "./FooterCrea";
import "./Portafolio.css";
const Portafolio = () => {
  return (
    <>
      <div className="section-crea">
        <div className="row container-crea">
          <div className="col-lg-12 header-nav">
            <h1 className="index-section-name">Nuestro Portafolio</h1>
            <h2 className="subindex-section-name">
            Conectamos personas con marcas a través
de grandes experiencias digitales.
            </h2>
          </div>
          <div className="listing-categories col-lg-12">
            <ul className="list-category">
              <li className="item-category active-category">Todos</li>
              <li className="item-category">Fotografía</li>
              <li className="item-category">Diseño gráfico</li>
            </ul>
          </div>
          <div className="listing-portafolio col-lg-12">
          <div className="crea-mansory">
              <a target="_blank" href="http://ecovilla.mccompany.pe/" className="mansory-item">
                <div className="bg">
                  <img src={require("../../components/HomeCrea/portafolio/qhawana.png")} alt="" />
                </div>
                <div className="name">
                  <h6>Proyecto Qhawana</h6>
                </div>
              </a>
              <a href="#" className="mansory-item">
              <div className="bg">
                  <img src={require("../../components/HomeCrea/portafolio/amazoncargo.png")} alt="" />
                </div>
                <div className="name">
                  <h6>Sitio web de courier: Amazon Cargo</h6>
                </div>
              </a>
              <a href="#" className="mansory-item">
              <div className="bg">
                  <img src={require("../../components/HomeCrea/portafolio/hotelemperador.png")} alt="" />
                </div>
                <div className="name">
                  <h6>Sitio web hotel: Hotel emperador Tacna</h6>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <FooterCrea/>
    </>
  );
};

export default Portafolio;
