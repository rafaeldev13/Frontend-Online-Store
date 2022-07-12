import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { setList, ItemsQntd } = this.props;
    return (
      <div>
        <CartButton ItemsQntd={ ItemsQntd } />
        <ListaCategory change={ this.value } />
        {
          products.length > 0 ? <ProductList
            products={ products }
            category={ category }
            setList={ setList }
          /> : <ProductList
            setList={ setList }
            products={ [] }
            category={ category }
          />
        }
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

Main.propTypes = {
  setList: PropTypes.func,
  ItemsQntd: PropTypes.number,
}.isRequired;

export default Main;
