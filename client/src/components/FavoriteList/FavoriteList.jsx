import { useDispatch, useSelector } from "react-redux";
import { getAllCities } from "../../redux/city/operations";
import { selectAllCities } from "../../redux/city/selectors";
import css from "./FavoriteList.module.css";
import clsx from "clsx";

export default function FavoriteList() {
  const dispatch = useDispatch();
  dispatch(getAllCities);
  const favoriteCities = useSelector(selectAllCities);
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  return (
    <div
      className={clsx(
        isDarkMode ? css.favListContainer : css.favListContainerLight
      )}
    >
      {favoriteCities.cities && (
        <>
          <h3>Favorite</h3>
          <ul>
            {favoriteCities.cities.map((city) => (
              <li key={city.id}>{city}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
