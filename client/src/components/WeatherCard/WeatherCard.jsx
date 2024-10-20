import ReactApexChart from "react-apexcharts";
import css from "./WeatherCard.module.css";
import { useSelector } from "react-redux";
import clsx from "clsx";
export default function WeatherCard({ weather, weatherData, error }) {
  const series = [
    {
      name: "Temperature (°C)",
      data: weatherData.map((data) => data.temp),
    },
    {
      name: "Humidity (%)",
      data: weatherData.map((data) => data.humidity),
    },
  ];

  const options = {
    chart: {
      type: "line",
      height: 350,
    },
    xaxis: {
      categories: weatherData.map((data) => data.time),
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
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  return (
    weather && (
      <div className={clsx(isDarkMode ? css.card : css.cardLight)}>
        <div className={css.item}>
          <div className={css.list}>
            <div className={css.itemTemp}>
              <p className={css.temp}>{weather.temp}°C</p>
              <p className={css.today}>Today</p>
            </div>
            <div className={css.itemImg}>
              <img
                src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                alt={weather.description}
                className={css.img}
              />
            </div>
          </div>
          <div>
            <p className={css.cityName}>
              Time: {new Date().toLocaleTimeString()}
            </p>
            <p className={css.cityName}>Location: {weather.city}</p>
          </div>
        </div>
        <div className={css.apex}>
          <ReactApexChart options={options} series={series} type="line" />
        </div>
      </div>
    )
  );
}
