import FavoriteList from "../components/FavoriteList/FavoriteList";
import css from "./styles.module.css";
import InputSearchCities from "../components/WeatherSearch/InputSearchCities";

export default function Weather() {
  return (
    <div className={css.firstSection}>
      <InputSearchCities />
      <FavoriteList />
    </div>
  );
}
