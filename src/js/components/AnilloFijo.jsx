import React from "react";
import esferaFija from "../../img/Esfera_fija.png";
import "../../styles/styles.css";
import AgujaMano from "./AgujaMano";

const AnilloFijo = ({ handRotate }) => {
  return (
    <>
      <div className="esfera-fija">
        <img className="esfera-fija-img" src={esferaFija} />
        <AgujaMano handRotate={handRotate} />
      </div>
    </>
  );
};

export default AnilloFijo;
