import React from "react";
import "../assets/css/CountryDetails.css";

const CountryDetails = ({ country }) => {
  return (
    <div className="country-details">
      <h2>{country.name}</h2>
      <p>Capital: {country.capital || "N/A"}</p>
      <p>Region: {country.region || "N/A"}</p>
      <p>Population: {country.population || "N/A"}</p>
      <p>Borders: {country.borders?.join(", ") || "None"}</p>
      <img
        src={country.flagUrl || country.flag}
        alt={`${country.name} flag`}
        className="flag"
      />
    </div>
  );
};

export default CountryDetails;
