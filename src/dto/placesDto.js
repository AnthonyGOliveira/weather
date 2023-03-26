export default class PlacesDto {
  constructor(places) {
    this.places = places.choices[0].message.content;
  }
}
