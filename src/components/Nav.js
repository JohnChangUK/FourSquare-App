import React, { Component } from 'react';

class Nav extends Component {

  constructor() {
    super();
    this.state = {
      zipCode: ''
    };
  }

  searchVenues() {
    console.log("searchVenues: " + this.state.zipCode);
  }

// After input tag <input />, event is automatically passed in
  updateZipcode(event) {
    console.log("updateZipcode: " + event.target.value);
    this.setState({
      zipCode: event.target.value
    });
  }

    render() {
      return (
          <div>
            <input onChange={this.updateZipcode.bind(this)} type="text" placeholder="Zip Code" />
            <button onClick={this.searchVenues.bind(this)}>Search</button>
          </div>
        );
    }
}

export default Nav;