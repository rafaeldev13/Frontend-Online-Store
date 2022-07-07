import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from '../pages/Main';
import Cart from '../pages/Cart';

class Routes extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={ Main } />
        <Route path="/cart" component={ Cart } />
      </div>
    );
  }
}

export default Routes;
