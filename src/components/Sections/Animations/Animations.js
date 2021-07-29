import React from "react";
import { withTranslation } from "react-i18next";
import {
  vid10_mp4,
  vid10_webm,
  vid1_mp4,
  vid1_webm,
  vid2_mp4,
  vid2_webm,
  vid3_mp4,
  vid3_webm,
  vid4_mp4,
  vid4_webm,
  vid5_mp4,
  vid5_webm,
  vid6_mp4,
  vid6_webm,
  vid7_mp4,
  vid7_webm,
  vid8_mp4,
  vid8_webm,
  vid9_mp4,
  vid9_webm,
} from "../../../images/animations/animations.js";
import ImageItem from "../../UI/ImageItem/ImageItem";
import List from "../../UI/List/List";
import styles from "./Animations.module.scss";

const Animations = ({ t }) => {
  const { animations, list, animItem, animContent } = styles;
  const images = [
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
        mp4: vid2_mp4,
        webm: vid2_webm,
      },
      alt: "Animation by Vadim Kalinin",
      type: "video",
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
        mp4: vid4_mp4,
        webm: vid4_webm,
      },
      alt: "Animation by Vadim Kalinin",
      type: "video",
    },
    {
      src: {
        mp4: vid5_mp4,
        webm: vid5_webm,
      },
      alt: "Animation by Vadim Kalinin",
      type: "video",
    },
    {
      src: {
        mp4: vid6_mp4,
        webm: vid6_webm,
      },
      alt: "Animation by Vadim Kalinin",
      type: "video",
    },
    {
      src: {
        mp4: vid7_mp4,
        webm: vid7_webm,
      },
      alt: "Animation by Vadim Kalinin",
      type: "video",
    },
    {
      src: {
        mp4: vid8_mp4,
        webm: vid8_webm,
      },
      alt: "Animation by Vadim Kalinin",
      type: "video",
    },
    {
      src: {
        mp4: vid9_mp4,
        webm: vid9_webm,
      },
      alt: "Animation by Vadim Kalinin",
      type: "video",
    },
    {
      src: {
        mp4: vid10_mp4,
        webm: vid10_webm,
      },
      alt: "Animation by Vadim Kalinin",
      type: "video",
    },
  ];

  return (
    <section className={animations}>
      <List listClass={list}>
        {images.map(({ src, alt, type }, i) => {
          return (
            <ImageItem
              key={i}
              type={type}
              alt={alt}
              src={src}
              itemClass={[animItem, `animItem-${i}`].join(" ")}
              contentClass={animContent}
            />
          );
        })}
      </List>
    </section>
  );
};

export default withTranslation()(Animations);
