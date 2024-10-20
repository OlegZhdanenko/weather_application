import { useSelector } from "react-redux";
import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";
import clsx from "clsx";

export default function Layout({ children }) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  return (
    <div className={clsx(isDarkMode ? css.global : css.globalLight)}>
      <AppBar />
      {children}
    </div>
  );
}
