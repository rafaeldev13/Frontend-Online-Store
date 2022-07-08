import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
  render() {
    const { price, name, img, clickButtonCart, id } = this.props;
    return (
      <div>
        <h3 data-testid="product">{name}</h3>
        <p>{`R$ ${price}`}</p>
        <img src={ img } alt={ name } />
        <button
          type="button"
          data-testid="product-add-to-cart"
          name="addCartItem"
          onClick={ () => clickButtonCart(id) }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

Product.propTypes = {
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  clickButtonCart: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Product;
