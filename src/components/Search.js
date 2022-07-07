import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      inputSearch: '',
    };
  }

  click = async () => {
    const { saveObject } = this.props;
    const { inputSearch } = this.state;
    saveObject(await getProductsFromCategoryAndQuery('MLB5672', inputSearch));
  }

  changeInput = ({ target }) => {
    const { value } = target;
    this.setState({
      inputSearch: value,
    });
  }

  render() {
    return (
      <div>
        <input data-testid="query-input" type="text" onChange={ this.changeInput } />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.click }
        >
          Procurar
        </button>
      </div>
    );
  }
}

Search.propTypes = {
  saveObject: PropTypes.func.isRequired,
};

export default Search;
