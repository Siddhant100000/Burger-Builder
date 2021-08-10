import React, { Component } from "react";
import axios from "axios";
import classes from "./ContactData.module.css";

import Button from "../../../components/Ui/Button/Button";
import Spinner from "../../../components/Ui/Spinner/Spinner";

export default class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    alert("You continued !");
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
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form;
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
        <form>
          <input
            type="text"
            name="name"
            className={classes.Input}
            placeholder="Your name"
          />
          <input
            type="text"
            name="email"
            className={classes.Input}
            placeholder="Your Email"
          />
          <input
            type="text"
            name="street"
            className={classes.Input}
            placeholder="Your Street"
          />
          <input
            type="text"
            name="postalCode"
            className={classes.Input}
            placeholder="Your Postal Address"
          />
          <input
            type="text"
            name="street"
            className={classes.Input}
            placeholder="Your street address"
          />
          <Button btnType="Success" clicked={this.orderHandler}>
            Order
          </Button>
        </form>
      </div>
    );
  }
}
