import React from "react";
import "./App.css";
import CityForm from "./components/CityForm";
import CityWeather from "./city-weather.json";

function App() {
  return (
    <div className="App">
      <h1>Weather</h1>
      {CityWeather.map((city) => (
        <CityForm
          key={city.id}
          cityName={city.name}
          countryName={city.sys.country}
          main={city.weather[0].main}
          description={city.weather[0].description}
          temp_min={Math.floor((city.main.temp_min - 273) * 10) / 10}
          temp_max={Math.floor((city.main.temp_max - 273) * 10) / 10}
          lon={city.coord.lon}
          lat={city.coord.lat}
        />
      ))}
    </div>
  );
}

export default App;
