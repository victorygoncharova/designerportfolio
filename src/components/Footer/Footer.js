import React from "react";
import { withTranslation } from "react-i18next";
import List from "../../components/UI/List/List";
import grid from "../../helpers/grid.module.scss";
import ListItem from "../UI/ListItem/ListItem";
import styles from "./Footer.module.scss";

const Footer = ({ t }) => {
  const cls = [styles.footer, grid.gridLayout];
  const footerItems = {
    columnFirst: [
      {
        item: "+38(095)425-27-99",
        link: "tel:+38(095)425-27-99",
        newTab: false,
      },
      {
        item: "vladmen1993@gmail.com",
        link: "mailto:vladmen1993@gmail.com",
        newTab: false,
      },
    ],
    columnSecond: [
      {
        item: "Telegram",
        link: "tg://resolve?domain=vadimvadimvadim",
        decorate: true,
        newTab: false,
      },
      {
        item: "Instagram",
        link: "https://www.instagram.com/vadimkalinin.design/",
        decorate: true,
        newTab: true,
      },
      {
        item: "Behance",
        link: "https://www.behance.net/VadimKalinin",
        decorate: true,
        newTab: true,
      },
    ],
  };
  const { columnFirst, columnThird, name, columnSecond, item, link } = styles;

  return (
    <footer className={cls.join(" ")}>
      <div className={columnFirst}>
        <p className={name}>{t("name")}</p>
      </div>

      <List listClass={columnSecond}>
        {footerItems.columnFirst.map((el, index) => {
          return (
            <ListItem
              key={index}
              itemClass={item}
              link={el.link}
              linkClass={link}
              index={index}
              text={el.item}
              decorate={el.decorate}
              newTab={el.newTab}
            />
          );
        })}
      </List>

      <List listClass={columnThird}>
        {footerItems.columnSecond.map((el, index) => {
          return (
            <ListItem
              key={index}
              itemClass={item}
              link={el.link}
              linkClass={link}
              index={index}
              text={el.item}
              decorate={el.decorate}
              newTab={el.newTab}
            />
          );
        })}
      </List>
    </footer>
  );
};

export default withTranslation()(Footer);
