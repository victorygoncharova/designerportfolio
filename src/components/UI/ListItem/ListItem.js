import React from "react";

const ListItem = ({
  itemClass,
  link = false,
  linkClass = false,
  text,
  decorate = false,
  newTab = false,
  clickFunction = false,
  type = "",
  index = false,
  isClicked = false,
}) => {
  const cls = [linkClass ? linkClass : null, decorate ? "decorate" : null];
  const target = newTab ? "_blank" : "_self";

  return clickFunction ? (
    <li
      className={
        isClicked === index ? [itemClass, "clicked"].join(" ") : itemClass
      }
      data-type={type}
      data-index={index}
      onClick={(e) => clickFunction(e)}
    >
      {link ? (
        <a href={link} className={cls.join(" ")} target={target}>
          {text}
        </a>
      ) : (
        <span>{text}</span>
      )}
    </li>
  ) : (
    <li className={itemClass}>
      {link ? (
        <a href={link} className={cls.join(" ")} target={target}>
          {text}
        </a>
      ) : (
        <span>{text}</span>
      )}
    </li>
  );
};

export default ListItem;
