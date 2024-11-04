import { useDispatch, useSelector } from "react-redux";
import { selectAllCities } from "../../redux/city/selectors";
import css from "./FavoriteList.module.css";
import clsx from "clsx";
import ApexChart from "../ApexChart/ApexChart";
import FavoriteCard from "../FavoriteCard/FavoriteCard";
import Spinner from "../Spinner/Spinner";
import { useEffect, useState } from "react";
import { getAllCities } from "../../redux/city/operations";
export default function FavoriteList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCities());
  }, [dispatch]);
  const favoriteCities = useSelector(selectAllCities);
  const [loading, setLoading] = useState(false);

  const isDarkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div
      className={clsx(
        isDarkMode ? css.favListContainer : css.favListContainerLight
      )}
    >
      {loading && <Spinner />}
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
