import "../weatherApp/WeatherApp.css";
import WeatherContext from "./WeatherContext";
import { useContext } from "react";
import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";

export default function WeatherScreen(props) {
  const { location, humidity, wind, temp, wicon } = useContext(WeatherContext);

  return (
    <>
      <div className="weather-image">
        <img src={wicon} alt="" />
      </div>
      <div className="weather-temp">{temp}</div>
      <div className="weather-location">{location}</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">{humidity}</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">{wind}</div>
            <div className="text">Wind speed</div>
          </div>
        </div>
      </div>
    </>
  );
}
