import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class ListaCategory extends Component {
  constructor() {
    super();
    this.state = {
      categoryList: [],
    };
  }

  async componentDidMount() {
    this.setState({
      categoryList: await getCategories(),
    });
  }

  render() {
    const { categoryList } = this.state;
    const { change } = this.props;
    return (
      <aside>
        {
          categoryList.map((category) => (
            <label
              key={ category.id }
              htmlFor={ category.id }
              data-testid="category"
            >
              <input
                type="radio"
                name="category"
                id={ category.id }
                onChange={ change }
              />
              { category.name }
            </label>))
        }
      </aside>
    );
  }
}

ListaCategory.propTypes = {
  change: PropTypes.func.isRequired,
};

export default ListaCategory;
