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
      ItemsLength: 0,
      ItemsQntd: 0,
      Items: 0,
    };
  }

  componentDidMount() {
    this.load();
  }

  save = () => {
    const { CartList } = this.state;
    localStorage.setItem('items', JSON.stringify(CartList));
  }

  load = () => {
    if (localStorage.getItem('items') === null) {
      localStorage.setItem('items', JSON.stringify([]));
    }
    const CartList = JSON.parse(localStorage.getItem('items'));
    this.setState({
      CartList,
      ItemsLength: CartList.length,
    }, () => { this.setItem(); });
  }

  modifyItemsQntd = (num) => {
    this.setState((prev) => {
      const ItemsQntd = prev.ItemsQntd + num;
      return ({ ItemsQntd });
    }, () => { this.setItem(); });
  }

  setItem = () => {
    const { ItemsLength, ItemsQntd } = this.state;
    const Items = ItemsLength + ItemsQntd;
    this.setState({
      Items,
    });
  }

  setList = (item) => {
    this.setState((prevState) => {
      const prev = prevState.CartList;
      const CartList = [...prev, item];
      const cartLength = CartList.length;
      return ({ CartList, ItemsLength: cartLength });
    }, () => { this.setItem(); this.save(); });
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
