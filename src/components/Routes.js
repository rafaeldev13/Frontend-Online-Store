import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from '../pages/Main';
import Cart from '../pages/Cart';
import ItemDisplay from './ItemDisplay';
import Checkout from '../pages/Checkout';

class Routes extends Component {
  constructor() {
    super();

    this.state = {
      CartList: [],
      Items: 0,
    };
  }

  modifyItemsQntd = (num) => {
    this.setState((prev) => {
      const Items = prev.Items + num;
      return ({ Items });
    });
  }

  setList = (item) => {
    this.setState((prevState) => {
      const prev = prevState.CartList;
      const CartList = [...prev, item];
      const cartLength = CartList.length;
      return ({ CartList, Items: cartLength });
    });
  }

  render() {
    const { CartList, Items } = this.state;
    return (
      <div>
        <Route
          path="/"
          exact
          render={ (props) => (<Main
            { ...props }
            setList={ this.setList }
            ItemsQntd={ Items }
          />) }
        />
        <Route
          path="/cart"
          render={ (props) => (<Cart
            { ...props }
            CartList={ CartList }
            modifyItemsQntd={ this.modifyItemsQntd }
          />) }
        />
        <Route
          path="/item/:id"
          render={ ((props) => (<ItemDisplay
            { ...props }
            setList={ this.setList }
            ItemsQntd={ Items }
          />)) }
        />
        <Route path="/checkout" component={ Checkout } />
      </div>
    );
  }
}

export default Routes;
