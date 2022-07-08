import React, { Component } from 'react';
import ProductList from '../components/ProductList';
import CartButton from '../components/CartButton';
import { getProductsFromCategory } from '../services/api';
import ListaCategory from '../components/ListCategory';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      category: '',
      products: [],
    };
  }

  componentDidMount() {
    localStorage.setItem('cartItems', JSON.stringify([]));
  }

  getProducts = async () => {
    const { category } = this.state;
    const products = await getProductsFromCategory(category);
    const { results } = products;
    this.setState({
      products: results,
    });
  }

  value = ({ target }) => {
    const { id } = target;
    this.setState({
      category: id,
    }, () => { this.getProducts(); });
  }

  render() {
    const { category, products } = this.state;
    return (
      <div>
        <ListaCategory change={ this.value } />
        {
          products.length > 0 ? <ProductList
            products={ products }
            category={ category }
          /> : <ProductList
            products={ [] }
            category={ category }
          />
        }
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
          Requisito 7
        </p>
        <CartButton />
      </div>
    );
  }
}

export default Main;
