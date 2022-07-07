import React, { Component } from 'react';
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
    return (
      <div>
        <Search saveObject={ this.saveObject } />
        { items.map((item) => this.createProduct(item)) }
      </div>
    );
  }
}

export default ProductList;
