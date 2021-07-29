import React from "react";
import { withTranslation } from "react-i18next";
import List from "../../components/UI/List/List.js";
import ListItem from "../../components/UI/ListItem/ListItem.js";
import {
  main,
  main2x,
  main2xMobile,
  main2xMobileWebp,
  main2xWebp,
  mainMobile,
  mainMobileWebp,
  mainWebp,
} from "../../images/index.js";
import styles from "./Contacts.module.scss";

const Contacts = ({ t }) => {
  const { contacts, info, img, item, link } = styles;
  const contactsItems = [
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
  ];

  return (
    <section className={contacts}>
      <List listClass={info}>
        {contactsItems.map((el, index) => {
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
      <div className={img}>
        <picture>
          <source
            media="(min-width: 1560px)"
            type="image/webp"
            srcSet={`${main2xWebp}`}
          />
          <source media="(min-width: 1560px)" srcSet={`${main2x}`} />
          <source
            media="(min-width: 601px) and (max-width: 767px)"
            type="image/webp"
            srcSet={main2xMobileWebp}
          />
          <source
            media="(min-width: 601px) and (max-width: 767px)"
            srcSet={main2xMobile}
          />
          <source
            media="(max-width: 600px)"
            type="image/webp"
            srcSet={`${main2xMobileWebp} 2x, ${mainMobileWebp} 1x`}
          />
          <source
            media="(max-width: 600px)"
            srcSet={`${main2xMobile} 2x, ${mainMobile} 1x`}
          />
          <source
            type="image/webp"
            srcSet={`${main2xWebp} 2x, ${mainWebp} 1x`}
          />
          <img src={main} srcSet={`${main2x} 2x`} alt={t("name")} />
        </picture>
      </div>
    </section>
  );
};

export default withTranslation()(Contacts);
