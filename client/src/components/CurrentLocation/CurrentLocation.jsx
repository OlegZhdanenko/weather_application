import axios from "axios";
import { useState, useEffect } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";

export default function CurrentLocation() {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [weather, setWeather] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error fetching location:", error);
          setError("Unable to retrieve your location");
        }
      );
    } else {
      setError("Geolocation is not supported by your browser");
    }
  }, []);

  async function getWeatherTemperature(location) {
    if (location.latitude) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast`,
          {
            params: {
              lat: location.latitude,
              lon: location.longitude,
              appid: "b619abe5a9b0774c51550d51d47ef802",
              units: "metric",
            },
          }
        );

        const data = response.data.list.map((item) => ({
          temp: item.main.temp,
          humidity: item.main.humidity,
          time: new Date(item.dt * 1000).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        }));
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setError("Unable to retrieve weather data");
      }
    }
  }

  async function getWeather(location) {
    if (location.latitude) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather`,
          {
            params: {
              lat: location.latitude,
              lon: location.longitude,
              appid: "b619abe5a9b0774c51550d51d47ef802",
              units: "metric",
            },
          }
        );

        const data = response.data;
        setWeather({
          temp: data.main.temp,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          city: data.name,
        });
        setError(null);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setError("Unable to retrieve weather data");
      }
    }
  }

  useEffect(() => {
    getWeatherTemperature(location);
    getWeather(location);
  }, [location]);

  return (
    weatherData && (
      <WeatherCard weather={weather} weatherData={weatherData} error={error} />
    )
  );
}
