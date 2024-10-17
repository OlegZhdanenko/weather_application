import { useState } from "react";
import WeatherList from "../components/WeatherList/WeatherList";
import WeatherSearch from "../components/WeatherSearch/WeatherSearch";
import CurrentLocation from "../components/CurrentLocation/CurrentLocation";
import InputSearchCities from "../components/WeatherSearch/InputSearchCities";
import FavoriteList from "../components/FavoriteList/FavoriteList";

export default function Weather() {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div>
      <InputSearchCities
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />
      <div>
        <CurrentLocation />
        <FavoriteList />
      </div>
      <WeatherSearch
        cityFiltered={filteredSuggestions}
        onChangeCity={setFilteredSuggestions}
      />
      <WeatherList city={selectedCity} location={location} />
    </div>
  );
}
