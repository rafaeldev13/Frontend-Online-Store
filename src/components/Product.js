import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Product extends Component {
  render() {
    const { price, name, img, clickButtonCart, id } = this.props;
    return (
      <div data-testid="product">
        <h3>{name}</h3>
        <p>{`R$ ${price}`}</p>
        <img src={ img } alt={ name } />
        <Link data-testid="product-detail-link" to={ `/item/${id}` }>Detalhes</Link>
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
