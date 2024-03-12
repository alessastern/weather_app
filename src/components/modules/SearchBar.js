import "../weatherApp/WeatherApp.css";
import search_icon from "../assets/search.png";

export default function SearchBar() {
  return (
    <div className="top-bar">
      <input type="text" className="cityInput" placeholder="search" />
      <div className="search-icon">
        <img src={search_icon} alt="search" />
      </div>
    </div>
  );
}
