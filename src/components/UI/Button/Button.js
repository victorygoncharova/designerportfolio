import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Button.module.scss";

const Button = ({ text, link }) => {
  const { btn } = styles;

  return (
    <NavLink to={link} className={[btn, "decorate"].join(" ")}>
      {text}
    </NavLink>
  );
};

export default Button;
