import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ModifyQuantity extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
  }

  modify = (number) => {
    const { modifyItemsQntd } = this.props;
    modifyItemsQntd(number);
    this.setState((prev) => ({ quantity: prev.quantity + number }));
  }

  render() {
    const increase = +1;
    const decrease = -1;
    const { quantity } = this.state;
    return (
      <div>
        <button
          type="button"
          name="increase"
          data-testid="product-increase-quantity"
          onClick={ () => { this.modify(increase); } }
        >
          +
        </button>
        <h3 data-testid="shopping-cart-product-quantity">{quantity}</h3>
        <button
          type="button"
          name="decrease"
          data-testid="product-decrease-quantity"
          onClick={ () => { this.modify(decrease); } }
          disabled={ quantity === 1 }
        >
          -
        </button>
      </div>
    );
  }
}

ModifyQuantity.propTypes = {
  modifyItemsQntd: PropTypes.func,
}.isRequired;

export default ModifyQuantity;
