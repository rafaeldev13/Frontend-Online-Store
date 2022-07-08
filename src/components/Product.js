import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Product extends Component {
  render() {
    const { price, name, img, id } = this.props;
    return (
      <div data-testid="product">
        <h3>{name}</h3>
        <p>{`R$ ${price}`}</p>
        <img src={ img } alt={ name } />
        <Link data-testid="product-detail-link" to={ `/item/${id}` }>Detalhes</Link>
      </div>
    );
  }
}

Product.propTypes = {
  price: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  id: PropTypes.number,
}.isRequired;

export default Product;
