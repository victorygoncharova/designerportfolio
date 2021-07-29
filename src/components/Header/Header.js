import React from "react";
import CreateNav from "./CreateNav/CreateNav";
import styles from "./Header.module.scss";

const Header = ({ lang, onChangeLang }) => (
  <header className={styles.header}>
    <CreateNav lang={lang} onChangeLang={onChangeLang} />
  </header>
);

export default Header;
