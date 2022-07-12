import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Product extends Component {
  freeShipping = () => {
    const { item: { shipping } } = this.props;
    const freeShipping = shipping.free_shipping;
    if (freeShipping) {
      return (
        <h3 data-testid="free-shipping">Frete Gratis</h3>
      );
    }
  }

  render() {
    const { item,
      item: { title,
        price,
        thumbnail,
        id },
      clickButtonCart,
      buttonTitle } = this.props;
    return (
      <div data-testid="product">
        { this.freeShipping() }
        <p data-testid="shopping-cart-product-name">{title}</p>
        <p>{`R$ ${price}`}</p>
        <img src={ thumbnail } alt={ title } />
        <Link data-testid="product-detail-link" to={ `/item/${id}` }>Detalhes</Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          name="addCartItem"
          onClick={ () => clickButtonCart(item) }
        >
          { buttonTitle }
        </button>
      </div>
    );
  }
}

Product.propTypes = {
  item: PropTypes.shape({}),
  img: PropTypes.string,
  clickButtonCart: PropTypes.func,
  buttonTitle: PropTypes.string,
}.isRequired;

export default Product;
