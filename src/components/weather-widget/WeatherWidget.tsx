import React, { useState } from "react";
import "./weather-widget.css";
import axios from "axios";
import cities from 'cities.json';

function WeatherWidget() {

    const [searching, setSearching] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    function searchCities() {
        /*const options = {
            method: 'GET',
            url: 'https://andruxnet-world-cities-v1.p.rapidapi.com/',
            params: {
              query: 'par',
              searchby: 'city'
            },
            headers: {
              'X-RapidAPI-Key': 'e4905e40eemsh7be5068681dc45bp1a35cajsn7e67c1df32c6',
              'X-RapidAPI-Host': 'andruxnet-world-cities-v1.p.rapidapi.com'
            }
          };
        try {
            const response = await axios.request(options);
            console.log(response);
        } catch (e) {
            console.error(e); 
        }*/

        //@ts-ignore
        console.log(cities.filter(e => e.name === "Paris"))
    }

    return (
        <div className="weather-widget">
            {searching ? 
                <input className="search-bar" placeholder="Find city..."></input>
                       :
                <div className="header" onClick={() => searchCities()}>
                    <h1 className="city-name">Trondheim</h1>
                    <img className="flag-icon" src="https://flagsapi.com/NO/flat/64.png"></img>
                </div>
                       }
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