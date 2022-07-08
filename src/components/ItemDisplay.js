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
    const { product: { title } } = this.state;
    return (
      <h3 data-testid="product-detail-name">{title}</h3>
    );
  }
}

ItemDisplay.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ItemDisplay;
