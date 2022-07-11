import React, { Component } from 'react';

class Formulario extends Component {
  constructor() {
    super();
    this.state = {
      forms: [{
        email: '',
        comentarios: '',
        avaliacao: 0,
      }],
    };
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

  submitForm = (e) => {
    e.preventDefault();
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
              value={ forms[0].email }
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
              value={ forms[0].comentarios }
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
        {/* <div>
          <p>
            { forms[0].email }
          </p>
          <fieldset>
            <legend>Avalie o Produto</legend>
            {five.map((num) => this.createStars(num.num))}
          </fieldset>
          <p>
            { forms[0].comentarios }
          </p>
        </div> */}
      </section>
    );
  }
}

export default Formulario;
