import React from "react";

const ImageItem = ({ itemClass, contentClass, src, alt = "Image", type }) => {
  return (
    <li className={itemClass}>
      {type === "img" ? (
        <picture>
          <source
            media="(min-width: 1560px)"
            type="image/webp"
            srcSet={`${src.image2xWebp}`}
          />
          <source media="(min-width: 1560px)" srcSet={`${src.image2x}`} />
          <source
            type="image/webp"
            srcSet={`${src.image2xWebp} 2x, ${src.imageWebp} 1x`}
          />
          <img
            src={src.image}
            srcSet={`${src.image2x} 2x`}
            alt={alt}
            className={contentClass}
          />
        </picture>
      ) : (
        <video autoPlay="autoplay" muted="muted" className={contentClass} loop>
          <source type="video/webm" src={src.webm} />
          <source type="video/mp4" src={src.mp4} />
        </video>
      )}
    </li>
  );
};

export default ImageItem;
