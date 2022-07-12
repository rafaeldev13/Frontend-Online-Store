import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { ItemsQntd } = this.props;
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
        <span data-testid="shopping-cart-size">{ ItemsQntd }</span>
      </div>
    );
  }
}

CartButton.propTypes = {
  ItemsQntd: PropTypes.number,
}.isRequired;

export default CartButton;
