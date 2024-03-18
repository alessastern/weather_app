import { createContext, useState } from "react";

const WeatherContext = createContext();
export default WeatherContext;

export const ContextProvider = ({ children }) => {
  const [location, setLocation] = useState("Kudrovo");
  const [temp, setTemp] = useState("15°C");
  const [humidity, setHumidity] = useState("99%");
  const [wind, setWind] = useState("3 km/h");

  const ContextData = {
    location: location,
    setLocation: setLocation,
    temp: temp,
    setTemp: setTemp,
    humidity: humidity,
    setHumidity: setHumidity,
    wind: wind,
    setWind: setWind,
  };

  return (
    <WeatherContext.Provider value={ContextData}>
      {children}
    </WeatherContext.Provider>
  );
};
