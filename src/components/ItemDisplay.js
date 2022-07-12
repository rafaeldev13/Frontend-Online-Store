import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsById } from '../services/api';
import CartButton from './CartButton';
import Formulario from './Formulario';

class ItemDisplay extends Component {
  constructor() {
    super();

    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct = async () => {
    const { match: { params: id } } = this.props;
    const product = await getProductsById(id.id);
    this.setState({
      product,
    });
  }

  render() {
    const { product: { title },
      product,
    } = this.state;
    const { setList, ItemsQntd } = this.props;
    return (
      <div>
        <CartButton ItemsQntd={ ItemsQntd } />
        <h3 data-testid="product-detail-name">{title}</h3>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ (() => { setList(product); }) }
        >
          Adicionar ao Carrinho
        </button>
        <Formulario />
      </div>
    );
  }
}

ItemDisplay.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  setList: PropTypes.func,
  ItemsQntd: PropTypes.number,
}.isRequired;

export default ItemDisplay;
