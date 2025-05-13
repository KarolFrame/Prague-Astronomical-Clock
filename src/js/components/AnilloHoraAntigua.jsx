import React from "react";
import anillo from "../../img/Anillo_hora_antigua.png";
import "../../styles/styles.css";

const AnilloHoraAntigua = ({ oldTimeRotate }) => {
  const rotation = oldTimeRotate;

  return (
    <div
      className="hora-Antigua"
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <img src={anillo}></img>
    </div>
  );
};

export default AnilloHoraAntigua;
