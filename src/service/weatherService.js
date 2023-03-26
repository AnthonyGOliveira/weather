import config from "../infraestructure/config.js";
import axios from "axios";
async function getLocation(city) {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${config.api.weatherKey}&lang=pt_br`;
  //api.openweathermap.org/geo/1.0/direct?q=belo_horizonte&appid=3a0f74a47464c4cbb9848cdbe72d289c&lang=pt_br
  return await axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error);
    });
}

async function getWeatherByLocation(longitude, latitude) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${config.api.weatherKey}`;
  return await axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error);
    });
}

export default {
  getLocation,
  getWeatherByLocation,
};
