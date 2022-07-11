import React, { Component } from 'react';

class ModifyQuantity extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
  }

  modify = ({ target }) => {
    if (target.name === 'increase') {
      this.setState((prev) => ({ quantity: prev.quantity + 1 }));
    } else {
      this.setState((prev) => ({ quantity: prev.quantity - 1 }));
    }
  }

  render() {
    const { quantity } = this.state;
    return (
      <div>
        <button
          type="button"
          name="increase"
          data-testid="product-increase-quantity"
          onClick={ this.modify }
        >
          +
        </button>
        <h3 data-testid="shopping-cart-product-quantity">{quantity}</h3>
        <button
          type="button"
          name="decrease"
          data-testid="product-decrease-quantity"
          onClick={ this.modify }
          disabled={ quantity === 1 }
        >
          -
        </button>
      </div>
    );
  }
}

export default ModifyQuantity;
