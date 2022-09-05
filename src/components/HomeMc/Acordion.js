import React from "react";
import "./Acordion.css";
const Acordion = ({ acordion, setAcordion, title }) => {
  return (
    <>
      <div className="ac">
        <h2 className={acordion === title ? "ac-header show" : "ac-header"} onClick={()=>{setAcordion(title)}}>
          <button type="button" className="ac-trigger">
            {title}
          </button>
        </h2>
        <div className={acordion === title ? "ac-panel show" : "ac-panel"}>
          <p className="ac-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </>
  );
};

export default Acordion;
