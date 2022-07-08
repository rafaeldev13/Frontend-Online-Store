import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from '../pages/Main';
import Cart from '../pages/Cart';
import ItemDisplay from './ItemDisplay';

class Routes extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={ Main } />
        <Route path="/cart" component={ Cart } />
        <Route path="/item/:id" component={ ItemDisplay } />
      </div>
    );
  }
}

export default Routes;
