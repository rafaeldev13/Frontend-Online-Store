import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Product extends Component {
  render() {
    const { price, name, img, clickButtonCart, id, buttonTitle } = this.props;
    console.log(id);
    return (
      <div data-testid="product">
        <p data-testid="shopping-cart-product-name">{name}</p>
        <p>{`R$ ${price}`}</p>
        <img src={ img } alt={ name } />
        <Link data-testid="product-detail-link" to={ `/item/${id}` }>Detalhes</Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          name="addCartItem"
          onClick={ () => clickButtonCart(id) }
        >
          { buttonTitle }
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
  buttonTitle: PropTypes.string.isRequired,
};
export default Product;
