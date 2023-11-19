import React, { useState } from 'react';
import CountryInput from './frontend/CountryInput';
import CountryInfo from './frontend/CountryInfo';
import './App.css'; 
const App = () => {
  const [countryInfo, setCountryInfo] = useState(null);

  const handleCountryInfoReceived = (data) => {
    setCountryInfo(data);
  };

  return (
    <div className="container">
      <h1>Country Information App</h1>
      <CountryInput onCountryInfoReceived={handleCountryInfoReceived} />
      <CountryInfo countryInfo={countryInfo} />
    </div>
  );
};

export default App;


