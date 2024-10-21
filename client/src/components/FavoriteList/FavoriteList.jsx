import { useSelector } from "react-redux";
import { selectAllCities } from "../../redux/city/selectors";
import css from "./FavoriteList.module.css";
import clsx from "clsx";
import ApexChart from "../ApexChart/ApexChart";
import FavoriteCard from "../FavoriteCard/FavoriteCard";

export default function FavoriteList() {
  const favoriteCities = useSelector(selectAllCities);

  const isDarkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div
      className={clsx(
        isDarkMode ? css.favListContainer : css.favListContainerLight
      )}
    >
      {favoriteCities.cities && (
        <ul className={css.listWeater}>
          {favoriteCities.cities.map((item) => (
            <li key={item.id} className={css.itemWeater}>
              <div className={css.card}>
                <FavoriteCard currentCity={item.city} currentCityId={item.id} />
              </div>
              <div className={css.apex}>
                <ApexChart currentCity={item.city} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
