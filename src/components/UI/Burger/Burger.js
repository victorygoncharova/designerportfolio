import React from "react";
import styles from "./Burger.module.scss";

const Burger = ({ clickHandler, isOpened }) => {
  const { burgerMenu, opened } = styles;

  const cls = [burgerMenu, isOpened ? opened : ""];

  return (
    <button className={cls.join(" ")} onClick={clickHandler}>
      <span></span>
    </button>
  );
};

export default Burger;
