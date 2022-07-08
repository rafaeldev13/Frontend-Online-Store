import React, { Component } from 'react';
import Product from '../components/Product';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
    };
  }

  componentDidMount() {
    const cartList = JSON.parse(localStorage.getItem('cartItems'));
    this.setState({ cartList });
  }

  createProduct = (item) => {
    const { price, thumbnail, title, id } = item;
    return (
      <Product
        price={ price }
        img={ thumbnail }
        name={ title }
        key={ id }
        id={ id }
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
                  <h3 data-testid="shopping-cart-product-quantity">quantidade</h3>
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

export default Cart;
