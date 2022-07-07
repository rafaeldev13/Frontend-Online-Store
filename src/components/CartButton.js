import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class CartButton extends Component {
  constructor() {
    super();

    this.state = {
      redirect: false,
    };
  }

  click = () => {
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { redirect } = this.state;
    return (
      <div>
        {
          redirect && <Redirect to="/cart" />
        }
        <button
          type="button"
          data-testid="shopping-cart-button"
          onClick={ this.click }
        >
          Carrinho
        </button>
      </div>
    );
  }
}

export default CartButton;
