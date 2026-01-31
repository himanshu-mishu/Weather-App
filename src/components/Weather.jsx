import React, { useEffect, useState } from "react";
import "./Weather.css";
import searchIcon from "../assets/search.png";
import windIcon from "../assets/wind.png";
import rainIcon from "../assets/rain.png";
import cloudIcon from "../assets/cloud.png";
import clearIcon from "../assets/clear.png";
import humidityIcon from "../assets/humidity.png";
import drizzleIcon from "../assets/drizzle.png";
import snowIcon from "../assets/snow.png";

const Weather = () => {
  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    search("London");
  }, []);

  return (
    <div className="weather">
      <div className="searchbar">
        <input type="text" placeholder="Enter city name..." />
        <img src={searchIcon} alt="Search" />
      </div>
      <img src={clearIcon} alt="Weather Icon" className="weather-icon" />
      <p className="temperature">25°C</p>
      <p className="location">New York</p>
      <div className="weather-data">
        <div className="col">
          <img src={humidityIcon} alt="Humidity" />
          <div>
            <p>60%</p>
            <span>Humidity</span>
          </div>

          <div className="col">
            <img src={windIcon} alt="Wind Speed" />
            <div>
              <p>3.6 km/hr</p>
              <span>wind speed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
