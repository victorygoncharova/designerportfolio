import React from "react";
import { withTranslation } from "react-i18next";
import {
  promo10,
  promo10_2x,
  promo10_2x_webp,
  promo10_webp,
  promo12,
  promo12_2x,
  promo12_2x_webp,
  promo12_webp,
  promo20,
  promo20_2x,
  promo20_2x_webp,
  promo20_webp,
  promo21,
  promo21_2x,
  promo21_2x_webp,
  promo21_webp,
  promo22,
  promo22_2x,
  promo22_2x_webp,
  promo22_webp,
  promo23,
  promo23_2x,
  promo23_2x_webp,
  promo23_webp,
  promo25,
  promo25_2x,
  promo25_2x_webp,
  promo25_webp,
  promo27,
  promo27_2x,
  promo27_2x_webp,
  promo27_webp,
  promo28,
  promo28_2x,
  promo28_2x_webp,
  promo28_webp,
  promo30,
  promo30_2x,
  promo30_2x_webp,
  promo30_webp,
  promo31,
  promo31_2x,
  promo31_2x_webp,
  promo31_webp,
  promo32,
  promo32_2x,
  promo32_2x_webp,
  promo32_webp,
  promo33,
  promo33_2x,
  promo33_2x_webp,
  promo33_webp,
  promo35,
  promo35_2x,
  promo35_2x_webp,
  promo35_webp,
  promo36,
  promo36_2x,
  promo36_2x_webp,
  promo36_webp,
  promo9,
  promo9_2x,
  promo9_2x_webp,
  promo9_webp,
} from "../../../images/promo/promoImg.js";
import ImageItem from "../../UI/ImageItem/ImageItem";
import List from "../../UI/List/List";
import styles from "./Promo.module.scss";

const Promo = ({ t }) => {
  const { promo, list, promoItem, promoContent } = styles;

  const images1 = [
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
        image: promo31,
        image2x: promo31_2x,
        imageWebp: promo31_webp,
        image2xWebp: promo31_2x_webp,
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
  ];

  const images2 = [
    {
      src: {
        image: promo21,
        image2x: promo21_2x,
        imageWebp: promo21_webp,
        image2xWebp: promo21_2x_webp,
      },
      alt: "Promo materials by Vadim Kalinin",
      type: "img",
    },
    {
      src: {
        image: promo22,
        image2x: promo22_2x,
        imageWebp: promo22_webp,
        image2xWebp: promo22_2x_webp,
      },
      alt: "Promo materials by Vadim Kalinin",
      type: "img",
    },
    {
      src: {
        image: promo12,
        image2x: promo12_2x,
        imageWebp: promo12_webp,
        image2xWebp: promo12_2x_webp,
      },
      alt: "Promo materials by Vadim Kalinin",
      type: "img",
    },

    {
      src: {
        image: promo30,
        image2x: promo30_2x,
        imageWebp: promo30_webp,
        image2xWebp: promo30_2x_webp,
      },
      alt: "Promo materials by Vadim Kalinin",
      type: "img",
    },
    {
      src: {
        image: promo25,
        image2x: promo25_2x,
        imageWebp: promo25_webp,
        image2xWebp: promo25_2x_webp,
      },
      alt: "Promo materials by Vadim Kalinin",
      type: "img",
    },
    {
      src: {
        image: promo20,
        image2x: promo20_2x,
        imageWebp: promo20_webp,
        image2xWebp: promo20_2x_webp,
      },
      alt: "Promo materials by Vadim Kalinin",
      type: "img",
    },
  ];

  const images3 = [
    {
      src: {
        image: promo27,
        image2x: promo27_2x,
        imageWebp: promo27_webp,
        image2xWebp: promo27_2x_webp,
      },
      alt: "Promo materials by Vadim Kalinin",
      type: "img",
    },
    {
      src: {
        image: promo28,
        image2x: promo28_2x,
        imageWebp: promo28_webp,
        image2xWebp: promo28_2x_webp,
      },
      alt: "Promo materials by Vadim Kalinin",
      type: "img",
    },
    {
      src: {
        image: promo36,
        image2x: promo36_2x,
        imageWebp: promo36_webp,
        image2xWebp: promo36_2x_webp,
      },
      alt: "Promo materials by Vadim Kalinin",
      type: "img",
    },
    {
      src: {
        image: promo32,
        image2x: promo32_2x,
        imageWebp: promo32_webp,
        image2xWebp: promo32_2x_webp,
      },
      alt: "Promo materials by Vadim Kalinin",
      type: "img",
    },
    {
      src: {
        image: promo33,
        image2x: promo33_2x,
        imageWebp: promo33_webp,
        image2xWebp: promo33_2x_webp,
      },
      alt: "Promo materials by Vadim Kalinin",
      type: "img",
    },
    {
      src: {
        image: promo23,
        image2x: promo23_2x,
        imageWebp: promo23_webp,
        image2xWebp: promo23_2x_webp,
      },
      alt: "Promo materials by Vadim Kalinin",
      type: "img",
    },
  ];

  return (
    <section className={promo}>
      <List listClass={list}>
        {images1.map(({ src, alt, type }, i) => {
          return (
            <ImageItem
              key={i}
              type={type}
              alt={alt}
              src={src}
              itemClass={[promoItem, `promoItem-${i}`].join(" ")}
              contentClass={promoContent}
            />
          );
        })}

        {images2.map(({ src, alt, type }, i) => {
          return (
            <ImageItem
              key={i}
              type={type}
              alt={alt}
              src={src}
              itemClass={[promoItem, `promoItem-${i + images1.length}`].join(
                " "
              )}
              contentClass={promoContent}
            />
          );
        })}

        {images3.map(({ src, alt, type }, i) => {
          return (
            <ImageItem
              key={i}
              type={type}
              alt={alt}
              src={src}
              itemClass={[
                promoItem,
                `promoItem-${i + images1.length + images2.length}`,
              ].join(" ")}
              contentClass={promoContent}
            />
          );
        })}
      </List>
    </section>
  );
};

export default withTranslation()(Promo);
