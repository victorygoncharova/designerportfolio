import React from "react";
import { withTranslation } from "react-i18next";
import {
  vid1_mp4,
  vid1_webm,
  vid3_mp4,
  vid3_webm,
  vid5_mp4,
  vid5_webm,
} from "../../../images/animations/animations";
import {
  poster1,
  poster1_2x,
  poster1_2x_webp,
  poster1_webp,
  poster2,
  poster2_2x,
  poster2_2x_webp,
  poster2_webp,
} from "../../../images/posters/postersImg";
import {
  promo10,
  promo10_2x,
  promo10_2x_webp,
  promo10_webp,
  promo14,
  promo14_2x,
  promo14_2x_webp,
  promo14_webp,
  promo16,
  promo16_2x,
  promo16_2x_webp,
  promo16_webp,
  promo3,
  promo35,
  promo35_2x,
  promo35_2x_webp,
  promo35_webp,
  promo3_2x,
  promo3_2x_webp,
  promo3_webp,
  promo5,
  promo5_2x,
  promo5_2x_webp,
  promo5_webp,
  promo9,
  promo9_2x,
  promo9_2x_webp,
  promo9_webp,
} from "../../../images/promo/promoImg";
import ImageItem from "../../UI/ImageItem/ImageItem";
import List from "../../UI/List/List";
import styles from "./WorkSection.module.scss";

const workSection = ({ t }) => {
  const { works, img, list, workItem, workContent } = styles;

  const images = [
    {
      src: {
        image: poster1,
        image2x: poster1_2x,
        imageWebp: poster1_webp,
        image2xWebp: poster1_2x_webp,
      },
      alt: "Poster by Vadim Kalinin",
      type: "img",
    },
    {
      src: {
        mp4: vid3_mp4,
        webm: vid3_webm,
      },
      alt: "Animation by Vadim Kalinin",
      type: "video",
    },
    {
      src: {
        image: promo5,
        image2x: promo5_2x,
        imageWebp: promo5_webp,
        image2xWebp: promo5_2x_webp,
      },
      alt: "Promo materials by Vadim Kalinin",
      type: "img",
    },
    {
      src: {
        image: poster2,
        image2x: poster2_2x,
        imageWebp: poster2_webp,
        image2xWebp: poster2_2x_webp,
      },
      alt: "Poster by Vadim Kalinin",
      type: "img",
    },
    {
      src: {
        image: promo35,
        image2x: promo35_2x,
        imageWebp: promo35_webp,
        image2xWebp: promo35_2x_webp,
      },
      alt: "Promo materials by Vadim Kalinin",
      type: "img",
    },
    {
      src: {
        mp4: vid1_mp4,
        webm: vid1_webm,
      },
      alt: "Animation by Vadim Kalinin",
      type: "video",
    },
    {
      src: {
        image: promo16,
        image2x: promo16_2x,
        imageWebp: promo16_webp,
        image2xWebp: promo16_2x_webp,
      },
      alt: "Promo materials by Vadim Kalinin",
      type: "img",
    },
    {
      src: {
        image: promo3,
        image2x: promo3_2x,
        imageWebp: promo3_webp,
        image2xWebp: promo3_2x_webp,
      },
      alt: "Promo materials by Vadim Kalinin",
      type: "img",
    },
    {
      src: {
        image: promo9,
        image2x: promo9_2x,
        imageWebp: promo9_webp,
        image2xWebp: promo9_2x_webp,
      },
      alt: "Promo materials by Vadim Kalinin",
      type: "img",
    },
    {
      src: {
        image: promo10,
        image2x: promo10_2x,
        imageWebp: promo10_webp,
        image2xWebp: promo10_2x_webp,
      },
      alt: "Promo materials by Vadim Kalinin",
      type: "img",
    },
    {
      src: {
        image: promo14,
        image2x: promo14_2x,
        imageWebp: promo14_webp,
        image2xWebp: promo14_2x_webp,
      },
      alt: "Promo materials by Vadim Kalinin",
      type: "img",
    },
    {
      src: {
        mp4: vid5_mp4,
        webm: vid5_webm,
      },
      alt: "Animation by Vadim Kalinin",
      type: "video",
    },
  ];

  return (
    <section className={works}>
      <List listClass={list}>
        {images.map(({ src, alt, type }, i) => {
          return (
            <ImageItem
              key={i}
              type={type}
              alt={alt}
              src={src}
              itemClass={[workItem, `workItem-${i + 1}`].join(" ")}
              contentClass={workContent}
            />
          );
        })}
      </List>
      {/* <Button text={t("allWorks")} link="/works" /> */}
    </section>
  );
};

export default withTranslation()(workSection);
