import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WeatherWidget from './components/weather-widget/WeatherWidget';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WeatherWidget/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
