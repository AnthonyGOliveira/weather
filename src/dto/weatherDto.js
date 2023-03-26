export default class WeatherDto {
  constructor(name, country, weather, images, places) {
    this.location = {
      name,
      country,
    };
    this.main = weather.main;
    this.weather = weather.weather;
    this.wind = weather.wind;
    this.images = images;
    this.places = places;
  }
}
