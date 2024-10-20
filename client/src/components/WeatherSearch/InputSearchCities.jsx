import { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";
import Card from "../Card/Card";
import ApexChart from "../ApexChart/ApexChart";
import css from "./InputSearchCities.module.css";
import { selectAllCities } from "../../redux/city/selectors";
import { useDispatch, useSelector } from "react-redux";
import { addCity } from "../../redux/city/operations";

export default function InputSearchCities() {
  const [cityOptions, setCityOptions] = useState([]);
  const [currentCity, setCurrentCity] = useState([]);

  const favoriteCities = useSelector(selectAllCities);
  const { cities } = favoriteCities;

  const fetchCities = async (query) => {
    try {
      const response = await axios.get(
        `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${query}`,
        {
          headers: {
            "X-RapidAPI-Key":
              "0a99cb4e4amsheeffbc409f1bd17p1399f0jsn80fff1b1b824",
            "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
          },
        }
      );

      const cities = response.data.data.map((city) => ({
        label: `${city.name}, ${city.countryCode}`,
        value: city.name,
      }));

      setCityOptions(cities);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const handleInputChange = (inputValue) => {
    if (inputValue.length > 3) {
      fetchCities(inputValue);
    }
  };

  function handleCityChange(selectedOption) {
    if (selectedOption) {
      setCurrentCity((prevItems) => {
        return [...prevItems, { id: Date.now(), name: selectedOption.value }];
      });
    }
  }
  const handleRemoveCity = (cityToRemove) => {
    setCurrentCity((currentCity) =>
      currentCity.filter((city) => city.name !== cityToRemove)
    );
  };

  return (
    <div className={css.conteinerWeater}>
      <div className={css.input}>
        <Select
          options={cityOptions}
          onChange={handleCityChange}
          isClearable
          onInputChange={handleInputChange}
          placeholder="Enter a city"
          noOptionsMessage={() => "No cities found"}
          className={css.inputSearch}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? "white" : "blue",
            }),
          }}
        />
      </div>
      {currentCity && (
        <ul className={css.listWeater}>
          {currentCity.map((item) => (
            <li key={item.id} className={css.itemWeater}>
              <div className={css.card}>
                <Card
                  currentCity={item.name}
                  onRemove={handleRemoveCity}
                  currentCityId={item.id}
                />
              </div>
              <div className={css.apex}>
                <ApexChart currentCity={item.name} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
