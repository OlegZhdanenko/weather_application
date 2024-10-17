// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchWeatherCurrent,
//   fetchWeatherTemp,
// } from "../../redux/weather/operations";
// import {
//   selectWeatherTemp,
//   selectWeatherCurrent,
// } from "../../redux/weather/selectors";
import css from "./WeatherList.module.css";
// import WeatherCard from "../WeatherCard/WeatherCard";

export default function WeatherList() {
  // console.log({ city });
  // const dispatch = useDispatch();
  // dispatch(fetchWeatherTemp(city));
  // dispatch(fetchWeatherCurrent(location));
  // const weatherTemp = useSelector(selectWeatherTemp);
  // const weatherCurrent = useSelector(selectWeatherCurrent);
  // console.log({ weatherCurrent });
  // console.log({ weatherTemp });

  return (
    <div>
      weatherCurrent && (
      <ul className={css.list}>
        {/* {weatherTemp.map((item) => (
          <li key={item.id}>
            <WeatherCard weather={weatherCurrent} weatherData={weatherTemp} />
          </li>
        ))} */}
      </ul>
      )
    </div>
  );
}
