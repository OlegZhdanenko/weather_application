import FavoriteList from "../../components/FavoriteList/FavoriteList";
import css from "./Favorites.module.css";

export default function Favorites() {
  return (
    <div className={css.containerHome}>
      <h1 className={css.applicationText}>Favorites Cities</h1>
      <FavoriteList />
    </div>
  );
}
