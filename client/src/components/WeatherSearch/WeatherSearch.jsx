import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  city: Yup.string(),
});

export default function WeatherSearch({ cityFiltered, onChangeCity }) {
  const handleSelectSuggestion = (setFieldValue, value) => {
    setFieldValue("city", value);
    onChangeCity([]);
  };

  const [city, setCity] = useState([]);

  //   useEffect(() => {
  //     async function fetchCity() {
  //       const response = await axios.get(
  //         ` http://api.openweathermap.org/data/2.5/weather?q=${cityFiltered},{country code}&units=metric&limit=5&exclude={current}&appid=dfdbb0310705e4c59c7b2309c897b974`
  //       );
  //       setCity(response.data);
  //       console.log(response);
  //     }
  //     fetchCity();
  //   }, [city]);

  const handleInputChange = (value) => {
    const filtered = cityFiltered.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );
    setCity(filtered);
  };

  return (
    <Formik
      initialValues={{ city: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Selected city:", values.city);
      }}
    >
      {({ setFieldValue }) => (
        <Form>
          <div style={{ position: "relative" }}>
            <Field
              name="city"
              placeholder="Choose a city"
              className="input-field"
              onChange={(e) => {
                const value = e.target.value;
                setFieldValue("city", value);
                handleInputChange(value);
              }}
            />
            <ErrorMessage name="city" component="div" className="error" />

            {city.length > 0 && (
              <ul className="suggestions-list">
                {city.map((suggestion) => (
                  <li
                    key={suggestion}
                    onClick={() =>
                      handleSelectSuggestion(setFieldValue, suggestion)
                    }
                    className="suggestion-item"
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
}
