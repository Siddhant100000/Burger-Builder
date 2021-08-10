import React, { Component } from "react";
import { Route } from "react-router-dom";

import CheckoutSummary from "../../components/Burger/OrderSummary/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

export default class Checkout extends Component {
  state = {
    ingredients: null,
    price: 0,
  };

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let params of query.entries()) {
      ingredients[params[0]] = +params[1];
    }
    this.setState({ ingredients: ingredients });
  }

  checkOutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
    console.log(this.props.history);
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
        <Route
          path={this.props.match.path + "/contact-data"}
          render={(props) => (
            <ContactData ingredients={this.state.ingredients} {...props} />
          )}
          ingredients={this.state.ingredients}
        />
      </div>
    );
  }
}
