import { format, set } from "date-fns";
import React, { useState, useEffect } from "react";
import AnilloFijo from "./AnilloFijo";
import AnilloHoraAntigua from "./AnilloHoraAntigua";
import AnilloZodiacal from "./AnilloZodiacal";
import "../../styles/styles.css";

const App = () => {
  const [time, setHora] = useState(new Date());
  const [handRotate, setHandRotate] = useState(0);
  const [zodiacRotate, setZodiacRotate] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setHora(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const _getHandAngle = () => {
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const segs = time.getSeconds();

    const handAngle = (hour + minutes / 60 + segs / 3600) * 15;
    return handAngle;
  };
  const _getZodiacAngle = (date = new Date()) => {
    const equinox = new Date(date.getFullYear(), 2, 20);
    const gapDate = date - equinox;
    const daysSinceEquinox = gapDate / (100 * 60 * 60 * 24);

    const zodiacAngle = (daysSinceEquinox % 365, 25) * (360 / 365.25);
    return zodiacAngle;
  };
  const _getSunAngle = () => {};
  useEffect(() => {
    setHandRotate(_getHandAngle());
    setZodiacRotate(_getZodiacAngle());
  }, [time]);
  const formatTime = format(time, "HH:mm:ss");

  return (
    <>
      <div className="container-fluid text-center tablero_main">
        <div className="row">
          <div className="col">
            <h1 className="m-5 text-white">{formatTime}</h1>
            <div className="clock">
              <AnilloFijo handRotate={handRotate} />
              <div className="rotate">
                <AnilloHoraAntigua />
                <AnilloZodiacal
                  zodiacRotate={zodiacRotate}
                  sunRotate={handRotate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
