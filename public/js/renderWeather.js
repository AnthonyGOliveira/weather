const weatherImage = document.querySelector("#image-weather");
const locationCountryCity = document.querySelector("#location-country-city");
const cardContainer = document.querySelector(".card__container");
const weatherInfo = document.querySelector("#weather-info");
const cardDescription = document.querySelector("#card-description");

function renderWeather(weather) {
  weatherImage.setAttribute("src", weather.images.full);
  const flagCountry = `<img class="country__image" src="https://flagsapi.com/${weather.location.country}/shiny/64.png">`;
  const iconWeather = `<img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}.png">`;
  weatherInfo.innerHTML = `<span>${iconWeather}${(
    weather.main.temp / 10
  ).toFixed()}°C</span><span> <img class="weather__icon" src="images/rainy.png"> ${
    weather.main.humidity
  }%</span><span> <img class="weather__icon" src="images/wind.png"> ${
    weather.wind.speed
  } km/h</span>`;
  locationCountryCity.innerHTML = flagCountry + weather.location.name;
  cardContainer.style.backdropFilter = "blur(2px)";
  cardDescription.innerHTML = `<p>${weather.places.places}</p>`;
  console.log("WEATHER:", weather);
}
