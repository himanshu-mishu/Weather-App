import React from "react";
import "./Weather.css";
import searchIcon from "../assets/search.png";
const Weather = () => {
  return (
    <div className="weather">
      <div className="searchbar">
        <input type="text" placeholder="Enter city name..." />
        <img src={searchIcon} alt="Search" />
      </div>
    </div>
  );
};

export default Weather;
