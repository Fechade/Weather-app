import { useState, useEffect } from "react";
import "./App.css";
import "./SearchBar.css";
import processWeather from "./API/Weather";

function App() {
  const [cityName, setCityName] = useState("");
  const [city, setcity] = useState();

  useEffect(() => {
    //processWeather(/*input value with  a city name here*/);
  }, []);

  const handleInput = (e) => {
    setCityName(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    processWeather(cityName).then((response) => {
      setcity(response);
      console.log(city);
    });
  };

  return (
    <>
      <form action="" class="search-bar">
        <input
          type="search"
          name="search"
          pattern=".*\S.*"
          required
          onChange={handleInput}
          value={cityName}
        />
        <button class="search-btn" type="submit" onClick={handleSearch}>
          <span>Search</span>
        </button>
      </form>
    </>
  );
}

export default App;
