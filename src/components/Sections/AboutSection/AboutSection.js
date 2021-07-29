import React from "react";
import { withTranslation } from "react-i18next";
import List from "../../UI/List/List";
import ListItem from "../../UI/ListItem/ListItem";
import styles from "./AboutSection.module.scss";

const AboutSection = ({ t }) => {
  const aboutItems = [
    {
      headline: t("iDo"),
      items: [
        { item: t("lp") },
        { item: t("ecom") },
        { item: t("promo") },
        { item: t("covers") },
      ],
    },
    {
      headline: t("tools"),
      items: [
        { item: "Figma" },
        { item: "Adobe Photoshop" },
        { item: "Adobe After Effects" },
        { item: "Adobe Premiere Pro" },
      ],
    },
    {
      headline: t("contact"),
      items: [
        { item: "+38(095)425-27-99", link: "tel:+38(095)425-27-99" },
        { item: "vladmen@gmail.com", link: "mailto:vladmen@gmail.com" },
        {
          item: "Telegram",
          link: "tg://resolve?domain=vadimvadimvadim",
          decorate: true,
        },
        {
          item: "Instagram",
          link: "https://www.instagram.com/vadimkalinin.design/",
          decorate: true,
        },
        {
          item: "Behance",
          link: "https://www.behance.net/VadimKalinin",
          decorate: true,
        },
      ],
    },
  ];
  const {
    about,
    text,
    wrapper,
    list,
    item,
    headlineLink,
    headlineItem,
  } = styles;

  return (
    <section className={about} id="about">
      <p className={text}>{t("aboutText")}</p>
      <div className={wrapper}>
        {aboutItems.map(({ headline, items }, index) => {
          return (
            <List listClass={list} key={index}>
              <li className={headlineItem}>{headline}</li>

              {items.map((el, i) => {
                const hasLink = el.link || false;
                const hasDecorate = el.decorate || false;

                return (
                  <ListItem
                    key={i}
                    itemClass={item}
                    link={hasLink}
                    linkClass={headlineLink}
                    decorate={hasDecorate}
                    text={el.item}
                  />
                );
              })}
            </List>
          );
        })}
      </div>
    </section>
  );
};

export default withTranslation()(AboutSection);
