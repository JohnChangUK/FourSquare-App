import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Nav, Venues } from './components';
import store from './stores';
import { Provider } from 'react-redux';

const app = (
    <Provider store={store.initialize()}>
      <div>
        <Nav />
        <Venues />
      </div>
      </Provider>
)

ReactDOM.render(app, document.getElementById('root'));