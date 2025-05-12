import React from "react";
import zodiacal from "../../img/Anillo_zodiacal.png";
import "../../styles/styles.css";
import AgujaSol from "./AgujaSol";

const AnilloZodiacal = ({ zodiacRotate, sunRotate }) => {
  return (
    <>
      <div
        className="zodiaco"
        style={{ transform: `rotate(${zodiacRotate}deg)` }}
      >
        <img className="zodiacal" src={zodiacal} />
        <AgujaSol sunRotate={sunRotate} />
      </div>
    </>
  );
};

export default AnilloZodiacal;
