import React, { Component } from 'react';
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
    return (
      <aside>
        {
          categoryList.map((category) => (
            <label
              key={ category.id }
              htmlFor={ `categoria${category.id}` }
              data-testid="category"
            >
              { category.name }
              <input
                type="radio"
                id={ `categoria${category.id}` }
              />
            </label>))
        }
      </aside>
    );
  }
}

export default ListaCategory;
