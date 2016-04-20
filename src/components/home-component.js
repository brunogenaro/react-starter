import React from 'react';

class Home extends React.Component {
  showLock() {
    // We receive lock from the parent component in this case
    // If you instantiate it in this component, just do this.lock.show()
    this.props.lock.show();
  }

  render() {
    return (
    <div className="login-box">
      <a onClick={this.showLock.bind(this)}>Sign In</a>
    </div>);
  }
}

// Export dependencies like this:
export default Home;
