import React, { useState } from "react";
import "./City.css";

export default function City() {
  let [city, setCity] = useState("Pretoria ");
  let [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`${city}`);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  return (
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
          <div className="Description">Sunny</div>
        </li>
      </ul>
    </div>
  );
}
