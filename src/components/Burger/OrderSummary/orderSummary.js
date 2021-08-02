import React, { Component } from "react";

import Auxiliary from "../../../hoc/Auxiliary";
import Button from "../../Ui/Button/Button";

class OrderSummary extends Component {
  componentDidUpdate() {
    // console.log("[OrderSummary.js] Update Cycle commenced ");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span> :{" "}
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <Auxiliary>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total price : {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to check out !</p>
        <Button btnType="Success" clicked={this.props.purchaseCotinue}>
          Continue
        </Button>
        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>
          Cancel
        </Button>
      </Auxiliary>
    );
  }
}

export default OrderSummary;
