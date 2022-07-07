import React, { Component } from 'react';
import ProductList from '../components/ProductList';

class Main extends Component {
  render() {
    return (
      <div>
        <ProductList />
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Main;
