import superagent from 'superagent';

export default class foursquare {
  constructor(clientId, clientSecret) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.lat = lat;
    this.lng = lng;
    this.baseUrl = 'https://api.foursquare.com/v2/venues/search';
  }

  search(query) {
    return new Promise((resolve, reject) => {
      superagent
        .get(this.baseUrl)
        .query({
          query: query,
          near: 'Orlando, FL',
          limit: 10,
          intent: 'match',
          categoryId: '4d4b7105d754a06374d81259'
        })
        .end((err, { body } = {}) => err ? reject(body || err) : resolve(body));
    });
  }
}