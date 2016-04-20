import React from 'react';
import instagram from '../services/instagram';

class LoggedIn extends React.Component {
  constructor(props) {
    super(props);

    console.warn('props', props);

    this.instagram = new instagram(
      props.idToken,
      props.geolocation.latitude,
      props.geolocation.longitue
    );


    this.state = {
      profile: null
    }
  }

  componentDidMount() {
    let results = this.instagram.search();
    console.warn('results', results);

    // In this case, the lock and token are retrieved from the parent component
    // If these are available locally, use `this.lock` and `this.idToken`
    this.props.lock.getProfile(this.props.idToken, function (err, profile) {
      if (err) {
        console.log("Error loading the Profile", err);
        return;
      }
      this.setState({profile: profile});
    }.bind(this));
  }

  render() {
    if (this.state.profile) {
      return (
        <div>
          <h2>Welcome {this.state.profile.nickname}</h2>
        </div>
      );
    } else {
      return (
        <div className="loading">Loading profile</div>
      );
    }
  }
}

// Export dependencies like this:
export default LoggedIn;
