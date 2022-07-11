import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from '../pages/Main';
import Cart from '../pages/Cart';
import ItemDisplay from './ItemDisplay';

class Routes extends Component {
  constructor() {
    super();

    this.state = {
      CartList: [],
    };
  }

  setList = (item) => {
    this.setState((prevState) => {
      const prev = prevState.CartList;
      const CartList = [...prev, item];
      return ({ CartList });
    });
  }

  render() {
    const { CartList } = this.state;
    return (
      <div>
        <Route
          path="/"
          exact
          render={ (props) => (<Main
            { ...props }
            setList={ this.setList }
          />) }
        />
        <Route
          path="/cart"
          render={ (props) => (<Cart
            { ...props }
            CartList={ CartList }
          />) }
        />
        <Route
          path="/item/:id"
          render={ ((props) => (<ItemDisplay
            { ...props }
            setList={ this.setList }
          />)) }
        />
      </div>
    );
  }
}

export default Routes;
