import React from "react";
import "./WeatherApp.css";
import SearchBar from "../modules/SearchBar";
import WeatherScreen from "../modules/WeatherScreen";
import { ContextProvider } from "../modules/WeatherContext";

const WeatherApp = () => {
  return (
    <div className="container">
      <ContextProvider>
        <SearchBar />
        <WeatherScreen />
      </ContextProvider>
      <div className="credits">icons by iconixar</div>
    </div>
  );
};

export default WeatherApp;
