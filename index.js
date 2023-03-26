import express from "express";
import LocationDto from "./src/dto/locationDto.js";
import WeatherDto from "./src/dto/weatherDto.js";
import config from "./src/infraestructure/config.js";
import weatherService from "./src/service/weatherService.js";
import locationImageService from "./src/service/locationImageService.js";
import LocationImageDto from "./src/dto/locationImageDto.js";
import artificialIntelligence from "./src/service/artificialIntelligence.js";
import PlacesDto from "./src/dto/placesDto.js";
const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/weather/:city", async (req, res) => {
  const { city } = req.params;
  const locationData = await weatherService.getLocation(city);
  const locationImagesData = await locationImageService.getImageLocation(city);
  const locationImageDto = new LocationImageDto(locationImagesData);
  const locationDto = new LocationDto(locationData[0]);
  const placesData = await artificialIntelligence.getPlacesToVisitInCity(city);
  const placesDto = new PlacesDto(placesData);
  const weatherData = await weatherService.getWeatherByLocation(
    locationDto.longitude,
    locationDto.latitude
  );
  const weatherDto = new WeatherDto(
    locationDto.name,
    locationDto.country,
    weatherData,
    locationImageDto,
    placesDto
  );
  res.json(weatherDto);
});

app.listen(config.backend.serverPort, () => {
  console.log(`Server listen on port ${config.backend.serverPort}`);
});
