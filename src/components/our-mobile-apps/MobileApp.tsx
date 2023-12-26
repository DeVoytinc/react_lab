import classes from "./MobileApp.module.css";
import React from "react";
import OutlinedButton from "../Common/OutlinedButton";

interface ITextSectionTwo {
  arr: string[];
  img: string;
}

const TextSectionTwo: React.FC<ITextSectionTwo> = ({ arr, img }) => {
  return (
    <div className={classes.row}>
      <div className={classes.column}>
        <h1 className={classes.title_text_section}>{arr[0]}</h1>
        <div className={classes.divider}></div>
        <h2 className={classes.subtitle_text_section}>{arr[1]}</h2>
        <OutlinedButton text={arr[2]} />
      </div>
      <div className={classes.imgBox}>
        <img src={img} />
      </div>
    </div>
  );
};

export default TextSectionTwo;