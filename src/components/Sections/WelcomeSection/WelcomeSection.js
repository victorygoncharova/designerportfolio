import React from "react";
import { withTranslation } from "react-i18next";
import {
  main,
  main2x,
  main2xMobile,
  main2xMobileWebp,
  main2xWebp,
  mainMobile,
  mainMobileWebp,
  mainWebp,
} from "../../../images/index";
import ListItem from "../../UI/ListItem/ListItem";
import styles from "./WelcomeSection.module.scss";

const WelcomeSection = ({ t }) => {
  const welcomeItems = [
    t("design"),
    t("uxUi"),
    t("graphicDesign"),
    t("animation"),
  ];
  const { welcome, name, list, item, image } = styles;
  return (
    <section className={welcome}>
      <p className={name}>{t("name")}</p>

      <ul className={list}>
        {welcomeItems.map((el, index) => {
          return (
            <ListItem key={index} itemClass={item} index={index} text={el} />
          );
        })}
      </ul>
      <div className={image}>
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

export default withTranslation()(WelcomeSection);
