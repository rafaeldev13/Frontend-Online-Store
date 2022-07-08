import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from '../components/Product';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
    };
  }

  componentDidMount() {
    const { CartList } = this.props;
    this.setState((prevState) => {
      const prev = prevState.cartList;
      const List = [...prev, CartList];
      return ({ cartList: List });
    });
  }

  createProduct = (item) => {
    const { id } = item;
    return (
      <Product
        item={ item }
        key={ id }
        buttonTitle="Adicionar ao Carrinho"
      /*  clickButtonCart={this.clickButtonCart} */
      />
    );
  }

  render() {
    const { cartList } = this.state;
    const zero = 0;
    return (
      <div>
        {cartList.length < zero ? (
          <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>)
          : (
            <div>
              { cartList.map((item) => (
                <div key={ item.id }>
                  {this.createProduct(item)}
                  <h3 data-testid="shopping-cart-product-quantity">1</h3>
                  <button
                    type="button"
                    data-testid="product-detail-add-to-cart"
                  >
                    +
                  </button>
                </div>))}
            </div>)}
      </div>
    );
  }
}

Cart.propTypes = {
  CartList: PropTypes.shape({}),
}.isRequired;

export default Cart;
