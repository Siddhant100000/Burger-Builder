import React, { Component } from "react";

import classes from "./Modal.module.css";
import Auxiliary from "../../hoc/Auxiliary";
import BackDrop from "../Ui/BackDrop/BackDrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  componentDidUpdate() {
    // console.log("[Modal.js] Will Update!");
  }

  render() {
    return (
      <Auxiliary>
        <BackDrop show={this.props.show} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Auxiliary>
    );
  }
}

export default Modal;
