import { createContext, useState } from "react";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";

import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";

const WeatherContext = createContext();
export default WeatherContext;

export const ContextProvider = ({ children }) => {
  const [location, setLocation] = useState("Kudrovo");
  const [temp, setTemp] = useState("15°C");
  const [humidity, setHumidity] = useState("99%");
  const [wind, setWind] = useState("3 km/h");
  const [wicon, setWicon] = useState(clear_icon);
  const manageIcon = (code) => {
    if (code === "01d" || code === "01n") setWicon(clear_icon);
    else if (code === "02d" || code === "02n") setWicon(cloud_icon);
    else if (
      code === "03d" ||
      code === "03n" ||
      code === "04d" ||
      code === "04n"
    )
      setWicon(drizzle_icon);
    else if (
      code === "09d" ||
      code === "09n" ||
      code === "10d" ||
      code === "10n"
    )
      setWicon(rain_icon);
    else if (code === "13d" || code === "13n") setWicon(snow_icon);
  };

  const ContextData = {
    location: location,
    setLocation: setLocation,
    temp: temp,
    setTemp: setTemp,
    humidity: humidity,
    setHumidity: setHumidity,
    wind: wind,
    setWind: setWind,
    wicon: wicon,
    setWicon: setWicon,
    manageIcon: manageIcon,
  };

  return (
    <WeatherContext.Provider value={ContextData}>
      {children}
    </WeatherContext.Provider>
  );
};
