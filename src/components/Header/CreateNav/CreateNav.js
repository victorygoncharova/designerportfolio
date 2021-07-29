import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import Burger from "../../UI/Burger/Burger";
import styles from "./CreateNav.module.scss";

class CreateNav extends Component {
  state = {
    isOpened: false,
    isСhosen: 1,
  };

  onBurgerClick = () => {
    this.state.isOpened
      ? document.body.classList.remove("overflow")
      : document.body.classList.add("overflow");

    this.setState(({ isOpened }) => {
      return { isOpened: !isOpened };
    });
  };

  closeMenu = ({ target }) => {
    if (!document.body.classList.contains("overflow")) return;

    const isTarget = target.closest("li");

    if (isTarget) {
      this.setState(({ isOpened }) => {
        return { isOpened: false };
      });

      document.body.classList.remove("overflow");
    }
  };

  render() {
    const { t, lang, onChangeLang } = this.props;
    const { nav, list, navItem, navLink, navBtn, opened } = styles;
    const { isOpened } = this.state;

    const navClass = [nav, isOpened ? opened : ""];

    const menuItems = [
      { item: t("home"), link: "/", type: "link", id: 1 },
      { item: t("works"), link: "/works", type: "link", id: 2 },
      { item: t("contacts"), link: "/contacts", type: "link", id: 4 },
      { item: t("lang"), type: "btn" },
    ];

    return (
      <nav className={navClass.join(" ")} onClick={this.closeMenu}>
        <Burger clickHandler={this.onBurgerClick} isOpened={isOpened} />
        <ul className={list}>
          {menuItems.map(({ item, link, type, id }, index) => {
            return (
              <li className={navItem} key={index} data-chosen={id}>
                {type === "link" ? (
                  <NavLink
                    exact={id === 1 && true}
                    to={link}
                    className={navLink}
                    activeStyle={{
                      fontWeight: 500,
                      borderBottom: "none",
                    }}
                  >
                    {item}
                  </NavLink>
                ) : (
                  <button
                    value={item}
                    onClick={(e) => onChangeLang(e)}
                    className={[navLink, navBtn].join(" ")}
                  >
                    ({item})
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default withTranslation()(CreateNav);
