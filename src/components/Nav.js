import React, { Component } from 'react';
import superagent from 'superagent';
import { connect } from 'react-redux';
import actions from '../actions';

class Nav extends Component {

  constructor() {
    super();
    this.state = {
      zipCode: '',
      filter: 'food'
    };
  }

  searchVenues(event) {
    event.preventDefault();

    console.log("searchVenues: " + this.state.zipCode);
    const url = 'https://api.foursquare.com/v2/venues/search';

    const params = {
      v: '20140806',
      near: this.state.zipCode,
      client_id: '3PJ02P0EE2SXCBEDHY53DGCB40DKPTPRQHKK0QECQLSKS3LF',
      client_secret: 'DOLCFQPJCRIXOCIPMLIPZDBQYT45CXROMJ3Q2IN4TWSZG3LK',
      query: this.state.filter
    };

    superagent
    .get(url)
    .query(params)
    .set('Accept', 'application/json')
    .end((err, response) => {
      const venues = response.body.response.venues;
      this.props.venuesReceived(venues);
    });
  }

  changeFilter(event) {
    console.log("Changed the Filter" + event.target.value);
    this.setState({
      filter: event.target.value
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
      <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">

              <input onChange={this.updateZipcode.bind(this)} className="form-control" type="text" placeholder="Zip Code" />
              <select id="filter" onChange={this.changeFilter.bind(this)} style={{marginLeft:12}} className="form-control">
                <option value="food">Food</option>
                <option value="drinks">Coffee</option>
                <option value="clothing">Clothing</option>
              </select>
              </div>
              <button style={{marginLeft:12}} onClick={this.searchVenues.bind(this)} className="btn btn-default">Search</button>
            </form>
            </div>
          </div>
      </nav>
        );
    }
}

const stateToProps = (state) => {
  return {
    venues: state.venue
  }
}

const dispatchToProps = (dispatch) => {
  return {
    venuesReceived: (venues) => dispatch(actions.venuesReceived(venues))
  }
}


export default connect(stateToProps, dispatchToProps)(Nav);
