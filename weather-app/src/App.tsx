import React, { useEffect, useState } from "react";
import Weather from "./components/weather";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const API_KEY = "418feb92f67298f83a1b1e1a92bd5954";
const RANDOM_CITIES = ["New York", "Tokyo", "Paris", "London", "Sydney", "Berlin"];

const App: React.FC = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);
  const [forecast, setForecast] = useState<any>(null);
  const [error, setError] = useState("");

  const fetchWeather = async (cityName: string) => {
    try {
      setError("");
      const weatherRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      setWeather(weatherRes.data);

      const forecastRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      setForecast(forecastRes.data);
    } catch (err) {
      setError("City not found. Try again.");
      setWeather(null);
      setForecast(null);
    }
  };

  useEffect(() => {
    const randomCity = RANDOM_CITIES[Math.floor(Math.random() * RANDOM_CITIES.length)];
    fetchWeather(randomCity);
  }, []);

  return (
    <div className="app-container d-flex flex-column justify-content-center align-items-center min-vh-100">
      <h1 className="app-title text-center mb-4">My Weather</h1>

      <div className="search-container mb-4">
        <input
          type="text"
          className="form-control search-input"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn btn-primary search-btn" onClick={() => fetchWeather(city)}>
          Get Weather
        </button>
      </div>

      {error && <p className="text-danger text-center">{error}</p>}
      {weather && <Weather data={weather} forecast={forecast} />}
    </div>
  );
};

export default App;
