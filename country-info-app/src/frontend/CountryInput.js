import React, { useState } from 'react';
import axios from 'axios';
import '../index.css';

const CountryInput = ({ onCountryInfoReceived }) => {
  const [countryName, setCountryName] = useState('');
  const [error, setError] = useState(null);

  const handleFetchCountryInfo = async () => {
    try {
      // Fetch country list
      const countriesResponse = await axios.get('http://localhost:3001/countries');
      console.log('Countries:', countriesResponse.data);

      // Fetch country info by name
      const countryResponse = await axios.get(`http://localhost:3001/country/${countryName}`);
      console.log('Selected Country:', countryResponse.data);

      onCountryInfoReceived(countryResponse.data);
      setError(null);
    } catch (error) {
      console.error(error);
      setError(`Error fetching country information for ${countryName}. Please try again.`);
    }
  };

  return (
    <div className="form-container">
      <input
        type="text"
        value={countryName}
        onChange={(e) => setCountryName(e.target.value)}
        className="form-field"
      />
      <button onClick={handleFetchCountryInfo} className="submit-button">
        Submit
      </button>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default CountryInput;
