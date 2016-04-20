import React from 'react';
import superagent from 'superagent';

class Indico extends React.Component {
  constructor() {
    super();

    this.state = {
      profile: null
    }
  }

  search(customText) {
    return new Promise((resolve, reject) => {
      superagent
        .post('https://apiv2.indico.io/sentiment?key=720ef985848d764888b0ab90b5073f4f')
        .send({ data: customText })
        .end((err, { body } = {}) => err ? reject(body || err) : resolve(body));
    });
  }

  render() {
    return ;
  }
}

// Export dependencies like this:
export default Indico;
