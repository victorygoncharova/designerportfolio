import React from "react";
import { withTranslation } from "react-i18next";
import {
  cover1,
  cover1_2x,
  cover1_2x_webp,
  cover1_webp,
  cover2,
  cover2_2x,
  cover2_2x_webp,
  cover2_webp,
  cover3,
  cover3_2x,
  cover3_2x_webp,
  cover3_webp,
  cover4,
  cover4_2x,
  cover4_2x_webp,
  cover4_webp,
} from "../../../images/covers/coversImg.js";
import ImageItem from "../../UI/ImageItem/ImageItem";
import List from "../../UI/List/List";
import styles from "./Covers.module.scss";

const Posters = ({ t }) => {
  const { covers, list, coverItem, coverContent } = styles;
  const images = [
    {
      src: {
        image: cover4,
        image2x: cover4_2x,
        imageWebp: cover4_webp,
        image2xWebp: cover4_2x_webp,
      },
      alt: "Cover by Vadim Kalinin",
      type: "img",
    },
    {
      src: {
        image: cover1,
        image2x: cover1_2x,
        imageWebp: cover1_webp,
        image2xWebp: cover1_2x_webp,
      },
      alt: "Cover by Vadim Kalinin",
      type: "img",
    },
    {
      src: {
        image: cover2,
        image2x: cover2_2x,
        imageWebp: cover2_webp,
        image2xWebp: cover2_2x_webp,
      },
      alt: "Cover by Vadim Kalinin",
      type: "img",
    },
    {
      src: {
        image: cover3,
        image2x: cover3_2x,
        imageWebp: cover3_webp,
        image2xWebp: cover3_2x_webp,
      },
      alt: "Cover by Vadim Kalinin",
      type: "img",
    },
  ];

  return (
    <section className={covers}>
      <List listClass={list}>
        {images.map(({ src, alt, type }, i) => {
          return (
            <ImageItem
              key={i}
              type={type}
              alt={alt}
              src={src}
              itemClass={[coverItem, `coverItem-${i}`].join(" ")}
              contentClass={coverContent}
            />
          );
        })}
      </List>
    </section>
  );
};

export default withTranslation()(Posters);
