export default class LocationDto {
  constructor(location) {
    this.name = location.name;
    this.country = location.country;
    this.latitude = parseFloat(location.lat.toFixed(2));
    this.longitude = parseFloat(location.lon.toFixed(2));
  }
}
