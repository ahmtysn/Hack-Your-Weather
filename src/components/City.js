import React from "react";
// import "./City.css";

export default function City({ data }) {
  return (
    <div className="container">
      <h1 className="tittle">
        {data.name}, {data.sys.country}
      </h1>
      <div className="main">
        <h2>{data.weather[0].main}</h2>
        <p>{data.weather[0].description}</p>
      </div>
      <div className="tempLoc">
        <p>min temp: {Math.floor((data.main.temp_min - 273) * 10) / 10} °C</p>
        <p>max temp: {Math.floor((data.main.temp_min - 273) * 10) / 10} °C</p>
        <p>
          location: {data.coord.lon}, {data.coord.lat}
        </p>
      </div>
    </div>
  );
}
