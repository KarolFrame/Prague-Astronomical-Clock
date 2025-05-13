import React from "react";
import zodiacal from "../../img/Anillo_zodiacal.png";
import "../../styles/styles.css";

const AnilloZodiacal = ({ zodiacRotate }) => {
  return (
    <>
      <div className="zodiaco">
        <img
          className="zodiacal"
          src={zodiacal}
          style={{ transform: `rotate(${zodiacRotate}deg)` }}
        />
      </div>
    </>
  );
};

export default AnilloZodiacal;
