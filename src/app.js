import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Nav, Venues } from './components';

class App extends Component { 

  render() {
    return (
        <div>
          <Nav />
          <Venues />
        </div>
      );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));