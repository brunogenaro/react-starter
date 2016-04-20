import superagent from 'superagent';
import {find} from 'lodash';

export default class instagram {
  constructor(accessToken, lat, lng) {
    this.accessToken = accessToken;
    this.lat = lat;
    this.lng = lng;
    this.baseUrl = 'https://api.instagram.com/v1/media/search';
  }

  getAllPosts() {
    return new Promise((resolve, reject) => {
      superagent.get(this.baseUrl)
        .query({
          access_token: this.accessToken,
          lat: this.lat,
          lng: this.lng,
          distance: 5000
        })
        .end((err, { body } = {}) => err ? reject(body || err) : resolve(body));
    });
  }

  getPostsWithLocations(posts) {
    return _.find(posts, function(post) { return post.location });
  }

  search() {
    return new Promise((resolve, reject) => {
      this.instagram.getAllPosts()
        .then(this.getPostsWithLocations)
        .then(resolve(data));
    });
  }
}