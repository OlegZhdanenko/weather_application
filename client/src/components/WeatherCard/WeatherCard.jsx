import ReactApexChart from "react-apexcharts";
import css from "./WeatherCard.module.css";
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

  return (
    <div className={css.card}>
      <h2 className={css.cityName}>Weather Forecast for {weather.city}</h2>
      <div className={css.list}>
        <div className={css.item}>
          <div className={css.itemTemp}>
            <p className={css.description}>Temperature: {weather.temp}°C</p>
            <p className={css.description}>
              Humidity: {weatherData[0]?.humidity}%
            </p>
          </div>
          <div className={css.itemImg}>
            <img
              src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt={weather.description}
              className={css.img}
            />
            <p className={css.description}>{weather.description}</p>
          </div>
        </div>
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={300}
          width={500}
        />
      </div>
    </div>
  );
}
