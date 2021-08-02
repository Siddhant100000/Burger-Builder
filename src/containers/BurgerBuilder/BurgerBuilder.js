import React, { Component } from "react";
import axios from "../../axios-order";
// import axios from 'axios' Global declreation;

import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/orderSummary";
import Spinner from "../../components/Ui/Spinner/Spinner";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {...}
  // }
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchaseAble: false,
    purchasing: false,
    loading: false,
  };

  addIngredientHandler = (type) => {
    const prevCount = this.state.ingredients[type];
    const updatedCount = prevCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = priceAddition + oldPrice;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });
    this.updatePurchase(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const prevCount = this.state.ingredients[type];
    if (prevCount <= 0) {
      return;
    }
    const updatedCount = prevCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const oldPrice = this.state.totalPrice;
    const priceDeduction = INGREDIENT_PRICES[type];
    const newPrice = oldPrice - priceDeduction;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });
    this.updatePurchase(updatedIngredients);
  };

  updatePurchase = (updatedIngredients) => {
    const sum = Object.keys(updatedIngredients)
      .map((igKey) => {
        return updatedIngredients[igKey];
      })
      .reduce((sum, element) => {
        return sum + element;
      }, 0);

    this.setState({ purchaseAble: sum > 0 });
  };

  purchasingHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    // alert('You continued !');
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Siddhant K",
        address: {
          street: "TestStreet 1",
          zipCode: "23434",
          country: "Deutschland",
        },
        email: "Sidddk@gmail.com",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false, purchasing: false });
      })
      .catch((error) => {
        this.setState({ loading: false, purchasing: false });
      });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
      //the statment checks and updates the disabledInfo object with true and false
      // if(disabledInfo[key] <= 0){
      //     disabledInfo[key] = true;
      // }else{
      //     disabledInfo[key] = false;
      // }
    }

    let orderSummary = (
      <OrderSummary
        ingredients={this.state.ingredients}
        purchaseCanceled={this.purchaseCancelHandler}
        purchaseCotinue={this.purchaseContinueHandler}
        price={this.state.totalPrice}
      />
    );

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing}>{orderSummary}</Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchaseAble={this.state.purchaseAble}
          ordered={this.purchasingHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
