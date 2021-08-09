import React, { Component } from "react";

import CheckoutSummary from "../../components/Burger/OrderSummary/CheckoutSummary/CheckoutSummary";

export default class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      cheese: 1,
      bacon: 1,
      meat: 1,
    },
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let params of query.entries()) {
      ingredients[params[0]] = +params[1];
    }
    this.setState({ ingredients: ingredients });
  }

  checkOutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  checkOutCancelHandler = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkOutCanceled={this.checkOutCancelHandler}
          checkOutContinued={this.checkOutContinuedHandler}
        />
      </div>
    );
  }
}
