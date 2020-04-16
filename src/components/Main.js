import React, { useState } from "react";
import Form from "./Form";
import City from "./City";

export default function Main() {
  const [weather, setWeather] = useState({});
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  const getWeather = async (cityName) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
      );
      setLoading(true);
      if (!res.ok) {
        throw new Error("Please insert a valid city name...");
      }
      const data = await res.json();
      setError(false);
      setWeather(data);
    } catch (error) {
      console.error(error);
      setWeather("");
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const keepSearchText = (e) => {
    setSearchText(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    getWeather(searchText);
  };

  return (
    <div>
      <Form
        onSubmit={submitForm}
        onChange={keepSearchText}
        searchText={searchText}
      />
      {loading && <h3>Please wait, loading..</h3>}
      {hasError && <h3>Sorry, we couldn't find that city..</h3>}
      {weather.id && <City data={weather} />}
    </div>
  );
}
