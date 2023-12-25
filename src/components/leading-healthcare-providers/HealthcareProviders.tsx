import classes from "./HealthcareProviders.module.css";
import React from "react";
import OutlinedButton from "../Common/OutlinedButton";

interface ITextSectionOne {
  arr: string[];
  img: string;
}

const TextSectionOne: React.FC<ITextSectionOne> = ({ arr, img }) => {
  return (
    <div className={classes.row}>
      <div className={classes.imgBox}>
        <img src={img} />
      </div>
      <div className={classes.column}>
        <h1 className={classes.title_text_section}>{arr[0]}</h1>
        <div className={classes.divider}></div>
        <h2 className={classes.subtitle_text_section}>{arr[1]}</h2>
        <OutlinedButton text={arr[2]} />
      </div>
    </div>
  );
};

export default TextSectionOne;