import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsById } from '../services/api';

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
    const { setList } = this.props;
    return (
      <div>
        <h3 data-testid="product-detail-name">{title}</h3>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ (() => { setList(product); }) }
        >
          Adicionar ao Carrinho
        </button>
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
}.isRequired;

export default ItemDisplay;
