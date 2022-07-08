import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import Search from './Search';

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

  createProduct = (item) => {
    const { price, thumbnail, title, id } = item;
    return <Product price={ price } img={ thumbnail } name={ title } key={ id } />;
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
