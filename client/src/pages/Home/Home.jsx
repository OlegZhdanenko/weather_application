import { useSelector } from "react-redux";
import CurrentLocation from "../../components/CurrentLocation/CurrentLocation";
import css from "./Home.module.css";
import clsx from "clsx";

export default function Home() {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  return (
    <div
      className={clsx(isDarkMode ? css.containerHome : css.containerHomeLight)}
    >
      <h1 className={css.applicationText}>Application for weather</h1>
      <CurrentLocation />
    </div>
  );
}
