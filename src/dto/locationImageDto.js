export default class LocationImageDto{
    constructor(locationImage){
        this.raw = locationImage.results[0].urls.raw;
        this.full = locationImage.results[0].urls.full;
    }
}