import React from "react";
import "../styles/CityForm.css";

export default function CityForm({
  cityName,
  countryName,
  main,
  description,
  temp_min,
  temp_max,
  lon,
  lat,
}) {
  return (
    <div className="container">
      <h1 className="tittle">
        {cityName}, {countryName}
      </h1>
      <div className="main">
        <h2> {main} </h2>
        <p> {description} </p>
      </div>
      <div className="tempLoc">
        <p> min temp: {temp_min} °C </p>
        <p> max temp: {temp_max} °C </p>
        <p>
          location: {lon}, {lat}
        </p>
      </div>
    </div>
  );
}
