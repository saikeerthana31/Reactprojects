import React from "react";

interface WeatherProps {
  data: {
    name: string;
    main: { temp: number };
    weather: { description: string; icon: string }[];
  };
  forecast: {
    list: { dt_txt: string; main: { temp: number }; weather: { icon: string }[] }[];
  } | null;
}

const Weather: React.FC<WeatherProps> = ({ data, forecast }) => {
  return (
    <div className="weather-result text-center mt-4 p-4 rounded">
      <h2 className="fw-bold">{data.name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt={data.weather[0].description}
        className="weather-icon"
      />
      <h3 className="temperature">{data.main.temp}°C</h3>
      <p className="text-muted">{data.weather[0].description}</p>

      {forecast && (
        <div className="forecast-container mt-3">
          <h4 className="forecast-title">Weekly Forecast</h4>
          <div className="forecast-list">
            {forecast.list
              .filter((item, index) => index % 8 === 0) // Show daily forecasts
              .map((item) => (
                <div key={item.dt_txt} className="forecast-item">
                  <p>{new Date(item.dt_txt).toLocaleDateString()}</p>
                  <img
                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                    alt="Weather Icon"
                  />
                  <p>{item.main.temp}°C</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
