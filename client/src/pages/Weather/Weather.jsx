import css from "./Weather.module.css";
import InputSearchCities from "../../components/WeatherSearch/InputSearchCities";
import clsx from "clsx";
import { useSelector } from "react-redux";

export default function Weather() {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  return (
    <div
      className={clsx(isDarkMode ? css.firstSection : css.firstSectionLight)}
    >
      <InputSearchCities />
    </div>
  );
}
