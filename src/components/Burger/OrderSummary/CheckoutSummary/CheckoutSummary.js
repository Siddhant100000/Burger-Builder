import React from "react";
import classes from "./CheckoutSummary.module.css";

import Burger from "../../Burger";
import Button from "../../../Ui/Button/Button";
import { withRouter } from "react-router-dom";

function CheckoutSummary(props) {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope you enjoy the meal !</h1>
      <div style={{ width: "300px", margin: "auto" }}></div>
      <Burger ingredients={props.ingredients} />
      <Button btnType="Danger" clicked={props.checkOutCanceled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.checkOutContinued}>
        CONTINUE
      </Button>
    </div>
  );
}

export default withRouter(CheckoutSummary);
