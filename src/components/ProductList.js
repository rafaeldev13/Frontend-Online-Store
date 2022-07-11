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

  clickButtonCart = async (item) => {
    const { setList } = this.props;
    setList(item);
  }

  createProduct = (item) => {
    const { id } = item;
    const { setList } = this.props;
    return (
      <Product
        item={ item }
        key={ id }
        buttonTitle="Adicionar ao Carrinho"
        clickButtonCart={ this.clickButtonCart }
        setList={ setList }
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
  category: PropTypes.string,
  products: PropTypes.arrayOf(PropTypes.shape({})),
  setList: PropTypes.shape({}),
}.isRequired;

export default ProductList;
