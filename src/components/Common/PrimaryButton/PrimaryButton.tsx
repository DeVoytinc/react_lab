import classes from "./PrimaryButton.module.css";
import React from "react";

interface IPrimaryButton {
  text: string;
}

const PrimaryButton: React.FC<IPrimaryButton> = ({ text }) => {
  return <button className={classes.primaryButton}>{text}</button>;
};

export default PrimaryButton;