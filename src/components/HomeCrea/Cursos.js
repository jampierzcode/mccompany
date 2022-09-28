import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Cursos = () => {
  const [cursos, setCursos] = useState([]);

  

  useEffect(() => {
    var config = {
      method: "get",
      url: "http://127.0.0.1:8000/api/cursos",
      headers: {},
    };
    axios(config)
    .then(function (response) {
      console.log(response)
      setCursos(response.data)
      // console.log(cursos)
      // console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [setCursos])
  

 
  return (
    <>
      <div className="section-crea">
        <div className="row container-crea">
          <div className="col-lg-12 header-nav">
            <h1 className="index-section-name">Nuestros Cursos</h1>
            {cursos.map((curso)=>{
              return(
                <>
                <p>{curso.name_curso}</p>
                <p>Precio: {curso.precio_curso}</p>
                <p>Docente: {curso.docente_curso}</p>
                <p>Certificado: {curso.certificado}</p>
                <br /> <br />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cursos;
