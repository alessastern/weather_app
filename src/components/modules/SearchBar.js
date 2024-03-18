import "../weatherApp/WeatherApp.css";
import api from "./api";
import search_icon from "../assets/search.png";
import { useContext, useState } from "react";
import WeatherContext from "./WeatherContext";

export default function SearchBar() {
  const { setLocation, setTemp, setHumidity, setWind } =
    useContext(WeatherContext);

  const [value, setValue] = useState("");
  const handleChange = (e) => {
    const target = e.target;
    setValue(target.value);
  };

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=Metric&appid=${api.apiKey}`;

  return (
    <div className="top-bar">
      <input
        type="text"
        className="cityInput"
        placeholder="search"
        value={value}
        onChange={handleChange}
      />
      <div
        className="search-icon"
        onClick={() => {
          value &&
            api.search(url).then((data) => {
              setLocation(data.name);
              setTemp(data.main.temp + "°C");
              setHumidity(data.main.humidity + " %");
              setWind(data.wind.speed + " km/h");
              setValue("");
            });
        }}
      >
        <img src={search_icon} alt="search" />
      </div>
    </div>
  );
}
