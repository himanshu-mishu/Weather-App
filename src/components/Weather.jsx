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
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(false);

  const allIcon = {
    "01d": clearIcon,
    "01n": clearIcon,
    "02d": cloudIcon,
    "02n": cloudIcon,
    "03d": drizzleIcon,
    "03n": drizzleIcon,
    "04d": cloudIcon,
    "04n": cloudIcon,
    "09d": rainIcon,
    "09n": rainIcon,
    "10d": rainIcon,
    "10n": rainIcon,
    "11d": rainIcon,
    "11n": rainIcon,
    "13d": snowIcon,
    "13n": snowIcon,
    "50d": cloudIcon,
    "50n": cloudIcon,
  };
  
  const search = async (cityName) => {

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
      const res = await fetch(url);
      const data = await res.json();

      if (!res.ok) {
        alert("City not found");
        return;
      }

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: allIcon[data.weather[0].icon] || clearIcon,
      });
    } catch (error) {
      // throw new Error("Failed to fetch weather data");
      console.error(error);
    }
  };

  useEffect(() => {
    search("London");
  }, []);

  return (
    <div className="weather">
      <div className="searchbar">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && city && search(city)}
        />
        <button
          type="button"
          className="search-btn"
          onClick={() => 
            city && search(city)}
        >
          <img src={searchIcon} alt="Search" />
        </button>
      </div>

      {weatherData && (
        <>
          <img
            src={weatherData.icon}
            alt="Weather Icon"
            className="weather-icon"
          />

          <p className="temperature">{weatherData.temperature}°C</p>
          <p className="location">{weatherData.location}</p>

          <div className="weather-data">
            <div className="col">
              <img src={humidityIcon} alt="Humidity" />
              <div>
                <p>{weatherData.humidity}%</p>
                <span>Humidity</span>
              </div>
            </div>

            <div className="col">
              <img src={windIcon} alt="Wind Speed" />
              <div>
                <p>{weatherData.windSpeed} km/hr</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
