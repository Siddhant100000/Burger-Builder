import React from "react";
import classes from "./Order.module.css";

export default function Order(props) {
  return (
    <div className={classes.Order}>
      <p>Ingredients: </p>
      <p>
        Price <strong>$5.67</strong>
      </p>
    </div>
  );
}
