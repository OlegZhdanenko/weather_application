import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";
import clsx from "clsx";
import { useState } from "react";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className={css.nav}>
      <button
        className={clsx(css.burger, isMenuOpen && css.burgerOpen)}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={css.burgerLine}></span>
        <span className={css.burgerLine}></span>
        <span className={css.burgerLine}></span>
      </button>
      <div className={clsx(css.menu, isMenuOpen && css.menuOpen)}>
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
      </div>
    </nav>
  );
}
