import { useState } from "react";
import Select from "react-select";
import axios from "axios";

export default function InputSearchCities({ selectedCity, setSelectedCity }) {
  const [cityOptions, setCityOptions] = useState([]);

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
    if (inputValue.length > 2) {
      fetchCities(inputValue);
    }
  };

  return (
    <div>
      <Select
        options={cityOptions}
        value={selectedCity}
        onChange={(selectedOption) => {
          setSelectedCity(selectedOption);
          setCityOptions([]);
        }}
        isClearable
        onInputChange={handleInputChange}
        placeholder="Enter a city"
        noOptionsMessage={() => "No cities found"}
      />
      {selectedCity && (
        <div>
          <p>Selected City: {selectedCity.label}</p>
        </div>
      )}
    </div>
  );
}
