import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';

class Venues extends Component {
  
    render() {
      const venues = this.props.venues || []

      return (
          <div>
            <ol>
                { 
                  venues.map( (venue, i) => {
                    return (
                        <li key={venue.id}>{venue.name}</li>
                      );
                  })
                }
            </ol>
          </div>
        );
    }
}

const stateToProps = (state) => {
  return {
// State refers to the store, venue refers to the Reducer
// venues refers to the key of the state, updated['venues']
    venues: state.venue.venues
  }
}

export default connect(stateToProps)(Venues);