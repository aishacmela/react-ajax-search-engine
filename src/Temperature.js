import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="container">
      <div className="row Temperature">
        <div className="col-6 temperature-content">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sunny"
          />
          <span className="temperature-value">20</span>
          <span className="temperature-units">°C |°F</span>
        </div>
        <div className="col-6 temperature-description">
          <ul className="mt-3">
            <li>
              <div className="Humidity">Humidity: 60%</div>
            </li>
            <li>
              <div className="Wind">Wind: 6 Km /h</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
  }