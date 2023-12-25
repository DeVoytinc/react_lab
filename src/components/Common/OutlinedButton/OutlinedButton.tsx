import classes from "./OutlinedButton.module.css";
import React from "react";

interface IOutlinedButton {
  text: string;
}

const OutlinedButton: React.FC<IOutlinedButton> = ({ text }) => {
  return <button className={classes.outlinedButton}>{text}</button>;
};

export default OutlinedButton;