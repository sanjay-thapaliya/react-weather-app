import React, { useState } from "react";
import axios from "axios";
export const Main = () => {
  const [location, setLocation] = useState("");
  const [data, setData] = useState({
    description: "",
    temp: "",
    name: "",
    country: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3a733893d9db9fe6a3abea9b25434726`
      )
      .then(function (res) {
        setData({
          description: res.data.weather[0].description,
          temp: res.data.main.temp - 273.15,
          name: res.data.name,
          country: res.data.sys.country,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    setLocation("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="container">
          <div class="row">
            <div class="col-9">
              <input
                className="form-control"
                type="text"
                placeholder="Enter Place"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div class="col">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      <br />
   
        
          
      <div class="container">
        <div class="row">
          <div class="col-sm">Country:</div>
          <div class="col-sm">
            <p className="btn btn-primary modi">{data.country}</p>
          </div>
          <div class="col-sm">Temperature:</div>
          <div class="col-sm">
            <p className="btn btn-primary modi">{data.temp} celsius</p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm">Weather condition:</div>
          <div class="col-sm">
            <p className="btn btn-primary modi">{data.description}</p>
          </div>
          <div class="col-sm">Name:</div>
          <div class="col-sm">
            <p className="btn btn-primary modi">{data.name}</p>
          </div>
        </div>
      </div>
    </>
  );
};
