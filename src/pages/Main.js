import React, { Component } from 'react';
import CartButton from '../components/CartButton';

class Main extends Component {
  render() {
    return (
      <div>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
          Requisito 6
        </p>
        <CartButton />
      </div>
    );
  }
}

export default Main;
