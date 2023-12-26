import classes from "./OurServices.module.css";
import React from "react";

import decor from "./../../../assets/decoration/curvegeometry.svg";

interface IOurServices {
  children: React.ReactNode;
}

const TextWithDivider: React.FC<IOurServices> = ({ children }) => {
  return (
    <div className={classes.divider_block}>
      <div className={classes.decorbox}>
        <img className={classes.decor} src={decor} />
      </div>
      <h1 className={classes.title_text}>Our services</h1>
      <div className={classes.divider}></div>
      <h2 className={classes.subtitle_text}>
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </h2>
      <div className={classes.list}>{children}</div>
    </div>
  );
};

export default TextWithDivider;