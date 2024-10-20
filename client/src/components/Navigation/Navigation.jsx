import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";
import clsx from "clsx";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.nav} >
      <NavLink
        className={({ isActive }) => {
          return clsx(css.link, isActive && css.isActive);
        }}
        to="/"
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={({ isActive }) => {
            return clsx(css.link, isActive && css.isActive);
          }}
          to="/weather"
        >
          Weather
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink
          className={({ isActive }) => {
            return clsx(css.link, isActive && css.isActive);
          }}
          to="/favorites"
        >
          Favorites
        </NavLink>
      )}
    </nav>
  );
}
