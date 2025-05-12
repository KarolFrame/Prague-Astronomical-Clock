import React from "react";
import agujaMano from "../../img/Aguja_mano.png";

const AgujaMano = ({ handRotate }) => {
  return (
    <>
      <img
        className="aguja-mano"
        style={{ transform: `rotate(${handRotate}deg)` }}
        src={agujaMano}
      />
    </>
  );
};

export default AgujaMano;
