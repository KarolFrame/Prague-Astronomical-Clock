import { format, set } from "date-fns";
import SunCalc from "suncalc";
import React, { useState, useEffect } from "react";
import AnilloFijo from "./AnilloFijo";
import AnilloHoraAntigua from "./AnilloHoraAntigua";
import AnilloZodiacal from "./AnilloZodiacal";
import AgujaSol from "./AgujaSol";
import "../../styles/styles.css";

const App = () => {
  const [time, setHora] = useState(new Date());
  const [handRotate, setHandRotate] = useState(0);
  const [zodiacRotate, setZodiacRotate] = useState(0);
  const [sunRotate, setSunRotate] = useState(0);
  const [sunPosition, setSunPosition] = useState(0);
  const [oldTimeRotate, setOldTimeRotate] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setHora(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const _getHandAngle = () => {
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    return (hour + minutes / 60 + seconds / 3600) * 15;
  };

  const _getZodiacAngle = (date = new Date()) => {
    const equinox = new Date(date.getFullYear(), 2, 20);
    const daysSinceEquinox = (date - equinox) / (1000 * 60 * 60 * 24);
    return (daysSinceEquinox % 365.25) * (360 / 365.25);
  };

  const _getSunAngle = () => {
    const RADIUS = 100;
    const totalAngle = _getHandAngle() + _getZodiacAngle();
    return Math.cos((totalAngle * Math.PI) / 180) * RADIUS;
  };

  const _getSunPosition = () => {
    const RADIUS = 100;
    const totalAngle = _getHandAngle() + _getZodiacAngle();
    return Math.sin((totalAngle * Math.PI) / 180) * RADIUS;
  };

  const getSunsetTime = () => {
    const times = SunCalc.getTimes(new Date(), 40.4168, -3.7038);
    return times.sunset.getHours() + times.sunset.getMinutes() / 60;
  };

  const _getOldTimeAngle = () => {
    const sunsetHour = getSunsetTime();
    return sunsetHour * 15;
  };

  useEffect(() => {
    setHandRotate(_getHandAngle());
    setZodiacRotate(_getZodiacAngle());
    setSunRotate(_getSunAngle());
    setSunPosition(_getSunPosition());
    setOldTimeRotate(_getOldTimeAngle());
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
              <AnilloHoraAntigua oldTimeRotate={oldTimeRotate} />
              <AnilloZodiacal zodiacRotate={zodiacRotate} />
              <AgujaSol sunRotate={sunRotate} sunPosition={sunPosition} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
