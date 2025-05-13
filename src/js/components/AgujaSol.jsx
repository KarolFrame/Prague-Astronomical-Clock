import React from "react";
import agujaSol from "../../img/aguja_sol.png";

const AgujaSol = ({ sunRotate, sunPosition }) => {
  return (
    <>
      <img
        className="aguja-sol"
        src={agujaSol}
        style={{ transform: `translate(${sunRotate}px, ${sunPosition}px)` }}
      />
    </>
  );
};

export default AgujaSol;
