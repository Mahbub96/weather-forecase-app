import React, { useEffect, useState } from "react";
import { debounce } from "lodash";
const logo =
  "https://www.itl.cat/pngfile/big/322-3226139_flowing-water-png-high-resolution-water-splash-png.png";

const API_KEY = "442139248c40c7bfdf976a3b541a09ae";

function FrontRight({ ...rest }) {
  const [search, setSearch] = useState("Dhaka");
  const [data, setData] = useState({});
  const { main } = data;

  if (main !== undefined) {
    var temp = main.temp;
    var humidity = main.humidity;
    var pressure = parseInt(main.pressure) / 1000;
    var country = data.sys.country;
    var weatherCondition = data.weather[0].main;
  } else {
    pressure = "NaN ";
    humidity = "NaN ";
    temp = "NaN ";
    weatherCondition = "NaN";
    country = "NaN";
  }

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const link = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${API_KEY}`;
      const obj = await fetch(link);
      const jsonObj = await obj.json();
      setData(jsonObj);
      // console.log(jsonObj);
    };

    fetchData();
  }, [search]);

  return (
    <div {...rest}>
      <div className="header">
        <img src={logo} alt="Logo" height="100px" width="100px" />
        <h3>
          {search},{country}
        </h3>
        <h5>{weatherCondition}</h5>
        <p>
          Temp:{temp} deg Pressure:
          {pressure} atm Humidity:{humidity} %
        </p>
      </div>

      <div className="searchArea">
        <input
          type="search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          name="search"
        />

        <p>After Entering a valid City Name press Enter to get result</p>
      </div>
    </div>
  );
}

export default FrontRight;
