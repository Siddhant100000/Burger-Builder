import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import BackDrop from "../../Ui/BackDrop/BackDrop";
import Auxilaiary from "../../../hoc/Auxiliary/Auxiliary";

export default function SideDrawer(props) {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <Auxilaiary>
      <BackDrop clicked={props.closed} show={props.open} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxilaiary>
  );
}
