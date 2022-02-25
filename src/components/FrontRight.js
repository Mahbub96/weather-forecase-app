import React from "react";
import DemoWeather from "./DemoWeather";
const logo =
  "https://www.itl.cat/pngfile/big/322-3226139_flowing-water-png-high-resolution-water-splash-png.png";

function FrontRight() {
  return (
    <>
      <div className="header">
        <img src={logo} alt="Logo" />
        <h3>Dhaka Division,BD</h3>
        <h5>Haze(haze)</h5>
        <p>Temp:30 deg Pressure:101325pa Humidity:80%</p>
      </div>

      <div className="searchArea">
        <input type="search" name="search" />
        <p>After Entering a valid City Name press Enter to get result</p>
      </div>

      <div className="searchResult">
        <h2>Recently Searched Result :</h2>
        <DemoWeather />
        <DemoWeather />
        <DemoWeather />
        <DemoWeather />
      </div>
    </>
  );
}

export default FrontRight;
