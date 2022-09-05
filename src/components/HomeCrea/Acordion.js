import React from "react";
import { FiActivity } from "react-icons/fi";

const Acordion = (props) => {
    const {title, content, acordion, setAcordion} = props;
  return (
    <li className={acordion==title ? "item-acordion-crea active-acordeon" : "item-acordion-crea"}>
      <div className="header-acordion" onClick={()=>{
        setAcordion(title)
      }}>
        <FiActivity />
        {title}
      </div>
      <p className="text-content-ac">
        {content}
      </p>
    </li>
  );
};

export default Acordion;
