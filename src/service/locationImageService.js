import config from "../infraestructure/config.js";
import axios from "axios";

async function getImageLocation(city) {
  const url = `https://api.unsplash.com/search/photos?page=1&lang=pt&query=${city}`;
  return await axios({
    method: "get",
    url,
    headers: { Authorization: `${config.api.unsplashKey}` },
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error);
    });
}

export default {
    getImageLocation
}