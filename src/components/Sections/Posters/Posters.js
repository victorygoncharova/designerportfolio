import React from "react";
import { withTranslation } from "react-i18next";
import {
  poster1,
  poster10,
  poster10_2x,
  poster10_2x_webp,
  poster10_webp,
  poster11,
  poster11_2x,
  poster11_2x_webp,
  poster11_webp,
  poster12,
  poster12_2x,
  poster12_2x_webp,
  poster12_webp,
  poster13,
  poster13_2x,
  poster13_2x_webp,
  poster13_webp,
  poster14,
  poster14_2x,
  poster14_2x_webp,
  poster14_webp,
  poster15,
  poster15_2x,
  poster15_2x_webp,
  poster15_webp,
  poster16,
  poster16_2x,
  poster16_2x_webp,
  poster16_webp,
  poster1_2x,
  poster1_2x_webp,
  poster1_webp,
  poster2,
  poster2_2x,
  poster2_2x_webp,
  poster2_webp,
  poster3,
  poster3_2x,
  poster3_2x_webp,
  poster3_webp,
  poster4,
  poster4_2x,
  poster4_2x_webp,
  poster4_webp,
  poster5,
  poster5_2x,
  poster5_2x_webp,
  poster5_webp,
  poster6,
  poster6_2x,
  poster6_2x_webp,
  poster6_webp,
  poster7,
  poster7_2x,
  poster7_2x_webp,
  poster7_webp,
  poster8,
  poster8_2x,
  poster8_2x_webp,
  poster8_webp,
  poster9,
  poster9_2x,
  poster9_2x_webp,
  poster9_webp,
} from "../../../images/posters/postersImg";
import ImageItem from "../../UI/ImageItem/ImageItem";
import List from "../../UI/List/List";
import styles from "./Posters.module.scss";

const Posters = ({ t }) => {
  const { posters, list, posterItem, posterContent } = styles;
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
        image: poster3,
        image2x: poster3_2x,
        imageWebp: poster3_webp,
        image2xWebp: poster3_2x_webp,
      },
      alt: "Poster by Vadim Kalinin",
      type: "img",
    },
    {
      src: {
        image: poster4,
        image2x: poster4_2x,
        imageWebp: poster4_webp,
        image2xWebp: poster4_2x_webp,
      },
      alt: "Poster by Vadim Kalinin",
      type: "img",
    },
    {
      src: {
        image: poster5,
        image2x: poster5_2x,
        imageWebp: poster5_webp,
        image2xWebp: poster5_2x_webp,
      },
      alt: "Poster by Vadim Kalinin",
      type: "img",
    },
    {
      src: {
        image: poster6,
        image2x: poster6_2x,
        imageWebp: poster6_webp,
        image2xWebp: poster6_2x_webp,
      },
      alt: "Poster by Vadim Kalinin",
      type: "img",
    },
    {
      src: {
        image: poster7,
        image2x: poster7_2x,
        imageWebp: poster7_webp,
        image2xWebp: poster7_2x_webp,
      },
      alt: "Poster by Vadim Kalinin",
      type: "img",
    },
    {
      src: {
        image: poster8,
        image2x: poster8_2x,
        imageWebp: poster8_webp,
        image2xWebp: poster8_2x_webp,
      },
      alt: "Poster by Vadim Kalinin",
      type: "img",
    },
    {
      src: {
        image: poster9,
        image2x: poster9_2x,
        imageWebp: poster9_webp,
        image2xWebp: poster9_2x_webp,
      },
      alt: "Poster by Vadim Kalinin",
      type: "img",
    },
    {
      src: {
        image: poster10,
        image2x: poster10_2x,
        imageWebp: poster10_webp,
        image2xWebp: poster10_2x_webp,
      },
      alt: "Poster by Vadim Kalinin",
      type: "img",
    },
    {
      src: {
        image: poster11,
        image2x: poster11_2x,
        imageWebp: poster11_webp,
        image2xWebp: poster11_2x_webp,
      },
      alt: "Poster by Vadim Kalinin",
      type: "img",
    },
    {
      src: {
        image: poster12,
        image2x: poster12_2x,
        imageWebp: poster12_webp,
        image2xWebp: poster12_2x_webp,
      },
      alt: "Poster by Vadim Kalinin",
      type: "img",
    },
    {
      src: {
        image: poster13,
        image2x: poster13_2x,
        imageWebp: poster13_webp,
        image2xWebp: poster13_2x_webp,
      },
      alt: "Poster by Vadim Kalinin",
      type: "img",
    },
    {
      src: {
        image: poster14,
        image2x: poster14_2x,
        imageWebp: poster14_webp,
        image2xWebp: poster14_2x_webp,
      },
      alt: "Poster by Vadim Kalinin",
      type: "img",
    },
    {
      src: {
        image: poster15,
        image2x: poster15_2x,
        imageWebp: poster15_webp,
        image2xWebp: poster15_2x_webp,
      },
      alt: "Poster by Vadim Kalinin",
      type: "img",
    },
    {
      src: {
        image: poster16,
        image2x: poster16_2x,
        imageWebp: poster16_webp,
        image2xWebp: poster16_2x_webp,
      },
      alt: "Poster by Vadim Kalinin",
      type: "img",
    },
  ];

  return (
    <section className={posters}>
      <List listClass={list}>
        {images.map(({ src, alt, type }, i) => {
          return (
            <ImageItem
              key={i}
              type={type}
              alt={alt}
              src={src}
              itemClass={[posterItem, `posterItem-${i}`].join(" ")}
              contentClass={posterContent}
            />
          );
        })}
      </List>
    </section>
  );
};

export default withTranslation()(Posters);
