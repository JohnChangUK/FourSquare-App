import React, { Component } from 'react';
import superagent from 'superagent';

class Nav extends Component {

  constructor() {
    super();
    this.state = {
      zipCode: ''
    };
  }

  searchVenues() {
    console.log("searchVenues: " + this.state.zipCode);
    const url = 'https://api.foursquare.com/v2/venues/search';

    const params = {
      v: '20140806',
      near: this.state.zipCode,
      client_id: '3PJ02P0EE2SXCBEDHY53DGCB40DKPTPRQHKK0QECQLSKS3LF',
      client_secret: 'DOLCFQPJCRIXOCIPMLIPZDBQYT45CXROMJ3Q2IN4TWSZG3LK'
    };

    superagent
    .get(url)
    .query(params)
    .set('Accept', 'application/json')
    .end((err, response) => {
      const venues = response.body.response.venues;
      console.log("RESPONSE: " + JSON.stringify(venues));
    });
  }

// After input tag <input />, event is automatically passed in
  updateZipcode(event) {
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