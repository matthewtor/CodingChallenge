import React from 'react';

const CountryInfo = ({ countryInfo }) => {
  console.log(countryInfo); // Log countryInfo to the console

  return (
    <div className="country-info">
      <h2>Country Information</h2>
      {countryInfo && (
        <div>
          <h3>{countryInfo[0].name.common}</h3>
          <p>Capital: {countryInfo[0].capital}</p>
          <p>Population: {countryInfo[0].population}</p>
          <p>Area: {countryInfo[0].area} square kilometers</p>
          {Array.isArray(countryInfo[0].languages) && (
            <p>Languages: {countryInfo[0].languages.join(', ')}</p>
          )}
          <p>Region: {countryInfo[0].region}</p>
          <p>Subregion: {countryInfo[0].subregion}</p>
          {Array.isArray(countryInfo[0].currencies) && countryInfo[0].currencies.map((currency, index) => (
            <p key={index}>Currency: {currency.name} ({currency.code})</p>
          ))}
          <p>Flag: <img src={countryInfo[0].flags.svg} alt={`${countryInfo[0].name.common} flag`} /></p>
          
        </div>
      )}
    </div>
  );
};

export default CountryInfo;


