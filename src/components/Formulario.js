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
    };
  }

  componentDidMount() {
    if (localStorage.getItem('avaliations') === null) {
      localStorage.setItem('avaliations', JSON.stringify([]));
    }
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
    this.setState({
      forms: [{
        avaliacao: target.id,
      }],
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      forms: [{
        [name]: value,
      }],
    });
  }

  save = () => {
    const { forms } = this.state;
    const list = JSON.parse(localStorage.getItem('avaliations'));
    console.log(list);
    localStorage.setItem('avaliations', JSON.stringify(...list));
  }

  submitForm = (e) => {
    e.preventDefault();
    this.save();
  }

  render() {
    const five = [{ num: 1 }, { num: 2 }, { num: 3 }, { num: 4 }, { num: 5 }];
    const { forms } = this.state;
    return (
      <section>
        <form>
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              name="email"
              value={ forms.email }
              data-testid="product-detail-email"
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
        <div>
          <fieldset>
            <legend>Avalie o Produto</legend>
          </fieldset>
        </div>
      </section>
    );
  }
}

export default Formulario;
