import classes from "./OutlinedButton.module.css";
import React from "react";

interface IOutlinedButton {
  text: string;
  onClick?: () => void,
}

const OutlinedButton: React.FC<IOutlinedButton> = ({ text, onClick }) => {
  return <button className={classes.outlinedButton} onClick={onClick}>{text}</button>;
};

export default OutlinedButton;