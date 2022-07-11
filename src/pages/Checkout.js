import React, { Component } from 'react';

class Checkout extends Component {
  render() {
    return (
      <div>
        <h1>Checkout</h1>
        <form>
          <label htmlFor="input-name">
            Nome Completo:
            <input type="text" id="input-name" data-testid="checkout-fullname" />
          </label>
          <label htmlFor="input-email">
            Email:
            <input type="email" id="input-email" data-testid="checkout-email" />
          </label>
          <label htmlFor="input-cpf">
            cpf:
            <input type="text" id="input-cpf" data-testid="checkout-cpf" />
          </label>
          <label htmlFor="input-phone">
            Número de telefone:
            <input type="text" id="input-phone" data-testid="checkout-phone" />
          </label>
          <label htmlFor="input-cep">
            CEP:
            <input type="text" id="input-cep" data-testid="checkout-cep" />
          </label>
          <label htmlFor="input-adress">
            Endereço:
            <input type="text" id="input-adress" data-testid="checkout-address" />
          </label>
        </form>
      </div>
    );
  }
}

export default Checkout;
