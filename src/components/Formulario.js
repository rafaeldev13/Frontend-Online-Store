import React, { Component } from 'react';

class Formulario extends Component {
  constructor() {
    super();
    this.state = {
      forms: {
        email: '',
        comentarios: '',
        avaliacao: 0,
      },
      avaliation: false,
    };
  }

  componentDidMount() {
    this.verification();
  }

  verification = () => {
    this.setState({
      avaliation: JSON.parse(localStorage.getItem('avaliations') !== null),
    });
  }

  createStars = (index) => (
    <input
      type="radio"
      name="number"
      data-testid={ `${index}-rating` }
      id={ index }
      key={ index }
      onClick={ this.handleAvaliantion }
    />
  );

  handleAvaliantion = ({ target }) => {
    this.setState((prev) => ({
      forms: {
        ...prev.forms,
        avaliacao: target.id,
      },
    }));
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState((prev) => ({
      forms: {
        ...prev.forms,
        [name]: value,
      },
    }));
  };

  save = () => {
    if (localStorage.getItem('avaliations') === null) {
      localStorage.setItem('avaliations', JSON.stringify([]));
    }
    const { forms } = this.state;
    const list = JSON.parse(localStorage.getItem('avaliations'));
    const list2 = list.length > 0 ? [...list, forms] : [forms];
    localStorage.setItem('avaliations', JSON.stringify([...list2]));
    this.verification();
  }

  submitForm = (e) => {
    e.preventDefault();
    this.save();
  }

  renderAvaliation = (avaliation) => {
    console.log(avaliation);
    return (
      <div key={ avaliation.email }>
        <p>
          { avaliation.email }
        </p>
        <p>
          { avaliation.comentarios }
        </p>
      </div>);
  };

  render() {
    const five = [{ num: 1 }, { num: 2 }, { num: 3 }, { num: 4 }, { num: 5 }];
    const { forms, avaliation } = this.state;
    return (
      <section>
        <form>
          <label htmlFor="email">
            <input
              data-testid="product-detail-email"
              type="email"
              id="email"
              placeholder="email"
              name="email"
              value={ forms.email }
              onChange={ this.handleChange }
            />
          </label>
          <fieldset>
            <legend>Avalie o Produto</legend>
            {five.map((num) => this.createStars(num.num))}
          </fieldset>
          <label htmlFor="mensagem">
            <textarea
              data-testid="product-detail-evaluation"
              id="mensagem"
              name="comentarios"
              value={ forms.comentarios }
              placeholder="Mensagem(opcional)"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="submit"
            data-testid="submit-review-btn"
            onClick={ this.submitForm }
          >
            Avaliar
          </button>
        </form>
        {
          avaliation && JSON.parse(localStorage.getItem('avaliations'))
            .map((item) => this.renderAvaliation(item))
        }
      </section>
    );
  }
}

export default Formulario;
