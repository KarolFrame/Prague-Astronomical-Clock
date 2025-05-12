import React from "react";
import agujaSol from "../../img/aguja_sol.png";

const AgujaSol = ({ sunRotate }) => {
  return (
    <>
      <img
        className="aguja-sol"
        src={agujaSol}
        style={{ transform: `rotate(${sunRotate}deg)` }}
      />
    </>
  );
};

export default AgujaSol;
