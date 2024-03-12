import "../weatherApp/WeatherApp.css";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import humidity_icon from "../assets/humidity.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";

export default function WeatherScreen() {
  return (
    <>
      <div className="weather-image">
        <img src={cloud_icon} alt="" />
      </div>
      <div className="weather-temp">-3C</div>
      <div className="weather-location">Kudrovo</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">99%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">20km/h</div>
            <div className="text">Wind speed</div>
          </div>
        </div>
      </div>
    </>
  );
}
