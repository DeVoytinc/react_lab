import classes from "./ServiceCard.module.css";
import React from "react";

interface ICardElement {
  title: string;
  subtitle: string;
  logo: string;
}

const ServiceCard: React.FC<ICardElement> = ({ title, subtitle, logo }) => {
  return (
    <div className={classes.card_element}>
      <div className={classes.imgBox}>
        <img src={logo} className={classes.img}></img>
      </div>
      <h1 className={classes.title_card}>{title}</h1>
      <h2 className={classes.subtitle_card}>{subtitle}</h2>
    </div>
  );
};

export default ServiceCard;