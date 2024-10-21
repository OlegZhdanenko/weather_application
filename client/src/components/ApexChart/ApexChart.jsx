import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";
import css from "./ApexChart.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";

export default function ApexChart({ currentCity }) {
  const [weatherData, setWeatherData] = useState(null);
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const getWeather = async (currentCity) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${currentCity}&units=metric&cnt=9&appid=fc5d4d5ed3e66ef0c40354ac1f569272`,
        {
          headers: "HTTP/1.1 200 OK",
        }
      );
      setWeatherData(response.data.list);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getWeather(currentCity);
  }, [currentCity]);

  if (!weatherData) return null;

  const series = [
    {
      name: "Temperature (°C)",
      data: weatherData.map((data) => data.main.temp),
    },
    {
      name: "Humidity (%)",
      data: weatherData.map((data) => data.main.humidity),
    },
  ];

  const options = {
    chart: {
      type: "line",
      height: 350,
    },
    xaxis: {
      categories: weatherData.map((data) => data.dt_txt.split(" ")[1]),
    },
    yaxis: [
      {
        title: {
          text: "Temperature (°C)",
        },
      },
      {
        opposite: true,
        title: {
          text: "Humidity (%)",
        },
      },
    ],
  };

  return (
    <div className={clsx(isDarkMode ? css.container : css.containerLight)}>
      <ReactApexChart options={options} series={series} type="line" />
    </div>
  );
}
