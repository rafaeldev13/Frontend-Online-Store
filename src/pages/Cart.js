import React, { Component } from 'react';

class Cart extends Component {
  render() {
    return (
      <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
    );
  }
}

export default Cart;
