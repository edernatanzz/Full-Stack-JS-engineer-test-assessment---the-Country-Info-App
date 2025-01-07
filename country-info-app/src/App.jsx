import { useState, useEffect } from "react";
import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/countries`)
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleCountryClick = (countryCode) => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/countries/${countryCode}`)
      .then((response) => response.json())
      .then((data) => setSelectedCountry(data))
      .catch((error) =>
        console.error(`Error fetching details for ${countryCode}:`, error)
      );
  };

  return (
    <div className="App">
      <h1>Country Info App</h1>
      <div className="container">
        <CountryList countries={countries} onCountryClick={handleCountryClick} />
        {selectedCountry && <CountryDetails country={selectedCountry} />}
      </div>
    </div>
  );
}

export default App;
