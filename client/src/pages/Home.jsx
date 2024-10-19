import CurrentLocation from "../components/CurrentLocation/CurrentLocation";
import css from "./styles.module.css";

export default function Home() {
  return (
    <div className={css.containerHome}>
      <h1 className={css.applicationText}>Application for weather</h1>
      <CurrentLocation />
    </div>
  );
}
