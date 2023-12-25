import classes from "./Footer.module.css";
import React from "react";

interface IFooter {}

const Footer: React.FC<IFooter> = () => {
  return (
    <div className={classes.row}>
      <div className={classes.column_logo}>
        <div className={classes.logo_row}>
          <h4 className={classes.company_logo}>T</h4>
          <h5 className={classes.company_name}>HealthCare</h5>
        </div>
        <div className={classes.text_block_under_logo}>
          HealthCare provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </div>
        <div className={classes.text_block}>
          ©HealthCare PTY LTD 2023. All rights reserved
        </div>
      </div>
      <div className={classes.categories_row}>
        <div className={classes.column}>
        <h3 className={classes.header_text_column}>Company</h3>
          <a href="/" className={classes.default_text_column}>About</a>
          <a href="/" className={classes.default_text_column}>Testimonials</a>
          <a href="/" className={classes.default_text_column}>Find a doctor</a>
          <a href="/" className={classes.default_text_column}>Apps</a>
        </div>
        <div className={classes.column}>
        <h3 className={classes.header_text_column}>Region</h3>
          <a href="/" className={classes.default_text_column}>Indonesia</a>
          <a href="/" className={classes.default_text_column}>Singapore</a>
          <a href="/" className={classes.default_text_column}>Hongkong</a>
          <a href="/" className={classes.default_text_column}>Canada</a>
        </div>
        <div className={classes.column}>
          <h3 className={classes.header_text_column}>Help</h3>
          <a href="/" className={classes.default_text_column}>Help center</a>
          <a href="/" className={classes.default_text_column}>Contact support</a>
          <a href="/" className={classes.default_text_column}>Instructions</a>
          <a href="/" className={classes.default_text_column}>How it works</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;