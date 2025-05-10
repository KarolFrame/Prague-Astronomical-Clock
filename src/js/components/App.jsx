import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import AnilloFijo from "./AnilloFijo";
import AnilloHoraAntigua from "./AnilloHoraAntigua";
import AnilloZodiacal from "./AnilloZodiacal";

const App = () => {
  const [time, setHora] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setHora(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = format(time, "HH:mm:ss");

  return (
    <>
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col">
            <h1>{formatTime}</h1>
            <div className="clock">
              <AnilloFijo />
              <div className="rotate">
                <AnilloHoraAntigua />
                <AnilloZodiacal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
