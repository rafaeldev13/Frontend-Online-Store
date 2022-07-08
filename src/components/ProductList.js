import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import Search from './Search';
import { getProductsById } from '../services/api';

class ProductList extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
    };
  }

  saveObject = (objects) => {
    const { results } = objects;
    this.setState({
      items: results,
    });
  }

  clickButtonCart = async (e) => {
    const cartItem = await getProductsById(e);
    const listItems = JSON.parse(localStorage.getItem('cartItems'));
    localStorage.setItem('cartItems', JSON.stringify([...listItems, cartItem]));
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
        clickButtonCart={ this.clickButtonCart }
      />);
  }

  render() {
    const { items } = this.state;
    const { category, products } = this.props;
    return (
      <div>
        <div>
          <Search category={ category } saveObject={ this.saveObject } />
        </div>
        <div>
          { items.length > 0 ? (items.map((item) => this.createProduct(item)))
            : (products.map((item) => this.createProduct(item))) }
        </div>
      </div>
    );
  }
}

ProductList.propTypes = {
  category: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default ProductList;
