import "../weatherApp/WeatherApp.css";
import api from "./api";
import search_icon from "../assets/search.png";
import { useState } from "react";

export default function SearchBar() {
  const [value, setValue] = useState("");

  return (
    <div className="top-bar">
      <input
        type="text"
        className="cityInput"
        placeholder="search"
        value={value}
      />
      <div className="search-icon" onClick={() => value && api.search(value)}>
        <img src={search_icon} alt="search" />
      </div>
    </div>
  );
}
