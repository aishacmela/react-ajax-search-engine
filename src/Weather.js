import React, {useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("Pretoria");
  const [message, setMessage] = useState("");
  const [conditions, setConditions] = useState ({});

  function getData(response) {
    setConditions({
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind:response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });


   
    console.log(response.data);
  }
   function handleSubmit(event) {
    event.preventDefault();
    setMessage(`${city}`);
    
    let apiKey = "a95c2c6739994ba4903e007ee817e7d1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getData);
  }
    

  function changeCity(event) {
    setCity(event.target.value);
  }
  return (
    <div>
     <div className="City">
      <div className="Search">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Type a city.."
            className="input-text"
            onChange={changeCity}
          />
          <input type="submit" value="Search" className="input-submit" />
        </form>
      </div>

      <h1 className="mt-4">{message}</h1>
      <ul>
        <li>
          <div className="Time">Last updated: Monday 14:39</div>
        </li>
        <li>
          <div className="Description">{conditions.description}</div>
        </li>
      </ul>
    </div>
    <div className="container">
      <div className="row Temperature">
        <div className="col-6 temperature-content">
          <img
            src= {conditions.icon}
            alt="condition icon"
          />
          <span className="temperature-value">{conditions.temperature}</span>
          <span className="temperature-units">°C |°F</span>
        </div>
        <div className="col-6 temperature-description">
          <ul className="mt-3">
            <li>
              <div className="Humidity">Humidity: {conditions.humidity}%</div>
            </li>
            <li>
              <div className="Wind">Wind: {conditions.wind} Km /h</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
  }