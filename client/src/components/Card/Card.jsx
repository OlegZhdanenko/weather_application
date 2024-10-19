import { useEffect, useState } from "react";
import css from "./Card.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addCity } from "../../redux/city/operations";
import clsx from "clsx";

export default function Card({ currentCity, onRemove }) {
  const [weather, setWeather] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  async function getWeather() {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&units=metric&appid=fc5d4d5ed3e66ef0c40354ac1f569272`,
        {
          headers: "HTTP/1.1 200 OK",
        }
      );

      setWeather(response.data);
    } catch (e) {
      return e;
    }
  }
  useEffect(() => {
    getWeather(currentCity);
  }, [currentCity]);
  const dispatch = useDispatch();
  const handleAddToFavorites = () => {
    dispatch(addCity(currentCity));
  };

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    onRemove(currentCity);
    setIsModalOpen(false);
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
  };
  let temperature = null;
  if (weather) {
    temperature = Math.round(weather.main.temp);
  }

  const isDarkMode = useSelector((state) => state.theme.darkMode);

  return (
    weather && (
      <div className={clsx(isDarkMode ? css.card : css.cardLight)}>
        <div className={css.list}>
          <div className={css.item}>
            <div className={css.itemTemp}>
              <p className={css.temp}>{temperature}°C</p>
              <p className={css.today}>Today</p>
            </div>

            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
              className={css.img}
            />
          </div>
          <p className={css.cityName}>Time:{new Date().toLocaleTimeString()}</p>
          <p className={css.cityName}>Location: {weather.name}</p>
          <div className={css.Button}>
            <button className={css.btn} onClick={handleAddToFavorites}>
              Remove from favorites
            </button>
            <button className={css.btn} onClick={handleAddToFavorites}>
              Add to favorites
            </button>
            <button className={css.btn} onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
        {isModalOpen && (
          <>
            <div className={css.modal} onClick={cancelDelete}>
              <p className={css.textModal}>
                Are you sure you want to delete this city?
              </p>
              <div className={css.btnModalContainer}>
                <button className={css.btnModal} onClick={confirmDelete}>
                  Yes
                </button>
                <button className={css.btnModal} onClick={cancelDelete}>
                  No
                </button>
              </div>
            </div>
            <div className={css.modalOverlay} onClick={cancelDelete}></div>
          </>
        )}
      </div>
    )
  );
}
