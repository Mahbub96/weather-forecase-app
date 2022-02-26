import React, { useEffect, useState } from "react";

const API_KEY = "442139248c40c7bfdf976a3b541a09ae";

const logos = {
  Mist: "https://cdn-icons-png.flaticon.com/512/175/175872.png",
  Clear:
    "data:image/jpeg;base64,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",
  Haze: "https://www.nicepng.com/png/full/123-1236627_haze-icon-png-haze-weather-icon.png",
  Clouds:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNVZaWiEgT_typcbwk83I_hOs__Iz2eWgYHQ&usqp=CAU",
};

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
    var logo = logos[weatherCondition];
  } else {
    country = weatherCondition = pressure = humidity = temp = undefined;
    logo =
      "data:image/png;base64,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";
  }

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const link = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${API_KEY}`;
      const obj = await fetch(link);
      const jsonObj = await obj.json();
      setData(jsonObj);
    };

    fetchData();
  }, [search]);

  return (
    <div {...rest}>
      <div className="header">
        <img src={logo} alt="Logo" height="100px" width="100px" />
        <h3>{search ? `${search} , ${country}` : " "}</h3>
        <h5>{search ? `${weatherCondition}` : " "}</h5>
        <p>Temp:{temp ? `${temp}°C` : "none"} </p>
        <p>
          Pressure:
          {temp ? `${pressure} atm` : "none"}
        </p>
        <p>Humidity:{temp ? `${humidity} %` : "none"}</p>
      </div>

      <div className="searchArea">
        <input
          autoComplete="off"
          type="search"
          onChange={(e) => setSearch(e.target.value)}
          name="search"
          value={search}
        />

        <p>After Entering a valid City Name and get result instantly</p>
      </div>
    </div>
  );
}

export default FrontRight;
