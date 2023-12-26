import classes from "./NavButton.module.css";
import React from "react";

interface INavButton {
  _enabled: boolean;
  text: string;
}

const NavButton: React.FC<INavButton> = ({ _enabled, text }) => {
  const primaryTopNavColor = "#1F1534";
  const primaryUnavailableTopNavColor = "rgba(31, 21, 52, 0.5)";

  const textStyle = {
    color: _enabled ? primaryTopNavColor : primaryUnavailableTopNavColor,
    enabled: _enabled.toString(),
  };

  return (
    <button style={textStyle} className={classes.navButton}>
      {text}
    </button>
  );
};

export default NavButton;