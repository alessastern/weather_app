import React from "react";
import "./WeatherApp.css";
import SearchBar from "../modules/SearchBar";
import WeatherScreen from "../modules/WeatherScreen";

const WeatherApp = () => {
  return (
    <div className="container">
      <SearchBar />
      <WeatherScreen />
    </div>
  );
};

export default WeatherApp;
