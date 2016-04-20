import superagent from 'superagent';
import foursquare from './foursquare';
import instagram from './instagram';
import indico from './indico';

export default class search {
  constructor(options) {
    this.foursquareClientId = options.foursquareClientId;
    this.foursquareClientSecret = options.foursquareClientSecret;
    this.instagramAccessToken = options.instagramAccessToken;
    this.indicoToken = options.indicoToken;
    this.lat = options.lat;
    this.lng = options.lng;

    this.instagram = new instagram(this.instagramAccessToken, this.lat, this.lng);
    this.foursquare = new foursquare(this.foursquareClientId, this.foursquareClientSecret);
    this.indico = new indico(this.indicoToken);
  }

  search() {
    return new Promise((resolve, reject) => {
      this.instagram.search()
        .then(this.foursquare.search(post))
    });
  }
}