// Import NPM dependencies like this:
import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/containers/Header';
import Feed from './components/containers/Feed';

// Import styles like this:
import './styles/main.scss';

// Import dependencies like this:
import Goat from './components/goat-component';

class App extends React.Component {
  render() {
    return (
    	<div>
      		<Header />
      		<Feed />
      	</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


