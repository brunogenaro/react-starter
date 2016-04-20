// Import NPM dependencies like this:
import React from 'react';
import ReactDOM from 'react-dom';

// Import styles like this:
import './styles/main.scss';

// Import dependencies like this:
import Home from './components/home-component';
import LoggedIn from './components/loggedin-component';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      geolocation: {},
      idToken: {}
    }
  }

  componentDidMount() {
    // asks for the geolocation as soon the apps render
    this.getLocation();
  }

  componentWillMount() {
    this.lock = new Auth0Lock('avnScC3lLTwclT9yvEC4eU4zuPPBqrIc', 'foodfeed.auth0.com');

    this.setState({idToken: this.getIdToken()});
  }

  // Get user's geolocation
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.saveGeolocation.bind(this));
    }
  }

  // Save geolocation into our state
  saveGeolocation(position) {
    this.setState({
      geolocation: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
    });
  }

  getIdToken() {
    var idToken = localStorage.getItem('userToken');
    var authHash = this.lock.parseHash(window.location.hash);
    if (!idToken && authHash) {
      if (authHash.id_token) {
        idToken = authHash.id_token
        localStorage.setItem('userToken', authHash.id_token);
      }
      if (authHash.error) {
        console.log("Error signing in", authHash);
        return null;
      }
    }
    return idToken;
  }

  showLock() {
    // We receive lock from the parent component in this case
    // If you instantiate it in this component, just do this.lock.show()
    // console.warn('this.props', JSON.stringify(this.props));
    this.props.lock.show();
  }

  render() {
      if (this.state.idToken) {
        return (<LoggedIn lock={this.lock} idToken={this.state.idToken} />);
      } else {
        return (<Home lock={this.lock} />);
      }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
