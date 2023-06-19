import React from "react";
import "./weather-widget.css";

function WeatherWidget() {
    return (
        <div className="weather-widget">
            <div className="header">
                <h1 className="city-name">Trondheim</h1>
                <img className="flag-icon" src="https://flagsapi.com/NO/flat/64.png"></img>
            </div>
            <img className="weather-icon" src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"></img>
            <h1 className="temperature">21°C</h1>
            <h2 className="time-of-day">12:44</h2>
            <div className="stats-container">
                <div className="stat wind">
                    <img src="https://cdn-icons-png.flaticon.com/512/192/192756.png"></img>
                    <h3 className="stat-text">11 kph</h3>
                </div>
                <div className="stat uv">
                    <img src="https://cdn-icons-png.flaticon.com/512/3512/3512031.png"></img>
                    <h3 className="stat-text">5</h3>
                </div>
                <div className="stat humidity">
                    <img src="https://cdn-icons-png.flaticon.com/512/1691/1691455.png"></img>
                    <h3 className="stat-text">68 %</h3>
                </div>
            </div>
        </div>
    )
}

export default WeatherWidget;