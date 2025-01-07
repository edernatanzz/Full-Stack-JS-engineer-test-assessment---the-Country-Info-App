import React from "react";
import "../assets/css/CountryList.css";

const CountryList = ({ countries, onCountryClick }) => {
  return (
    <div className="country-list">
      <h2>Countries</h2>
      <ul>
        {countries.map((country) => (
          <li
            key={country.countryCode}
            onClick={() => onCountryClick(country.countryCode)}
            className="country-item"
          >
            {country.name} ({country.countryCode})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
