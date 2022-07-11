import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import ModifyQuantity from '../components/ModifyQuantity';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
    };
  }

  componentDidMount() {
    const { CartList } = this.props;
    // Consertar depois
    // if (CartList !== '') {
    this.setState((prevState) => {
      const prev = prevState.cartList;
      const List = CartList.length !== 0 ? [...CartList] : prev;
      return ({ cartList: List });
    });
    // }
  }

  createProduct = (item) => {
    const { id } = item;
    return (
      <Product
        item={ item }
        key={ id }
        buttonTitle="Remover do carrinho"
      /*  clickButtonCart={this.clickButtonCart} */
      />
    );
  }

  render() {
    const { cartList } = this.state;
    return (
      <div>
        {cartList.length === 0 ? (
          <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>)
          : (
            <div>
              <Link data-testid="checkout-products" to="/checkout">Finalizar Compra</Link>
              { cartList.map((item) => (
                <div key={ item.id }>
                  {this.createProduct(item)}
                  <ModifyQuantity />
                </div>))}
            </div>)}
      </div>
    );
  }
}

Cart.propTypes = {
  CartList: PropTypes.arrayOf,
}.isRequired;

export default Cart;
