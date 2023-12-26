import classes from "./HeaderText.module.css";
import React from "react";
import PrimaryButton from "../Common/PrimaryButton";

interface IHeaderText {
  arr: string[];
}

const HeaderText: React.FC<IHeaderText> = ({ arr }) => {
  return (
    <div className={classes.column}>
      <h1 className={classes.title_header}>{arr[0]}</h1>
      <h2 className={classes.subtitle_header}>{arr[1]}</h2>
      <PrimaryButton text={arr[2]} />
    </div>
  );
};

export default HeaderText;