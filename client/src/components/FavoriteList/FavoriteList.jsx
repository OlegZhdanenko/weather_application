import { useDispatch, useSelector } from "react-redux";
import { getAllCities } from "../../redux/city/operations";
import { selectAllCities } from "../../redux/city/selectors";

export default function FavoriteList() {
  const dispatch = useDispatch();
  dispatch(getAllCities);
  const favoriteCities = useSelector(selectAllCities);

  return (
    favoriteCities.cities && (
      <ul>
        {favoriteCities.cities.map((city) => (
          <li key={city.id}>{city}</li>
        ))}
      </ul>
    )
  );
}
