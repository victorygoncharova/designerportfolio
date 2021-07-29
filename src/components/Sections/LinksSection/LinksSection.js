import React from "react";
import List from "../../UI/List/List";
import ListItem from "../../UI/ListItem/ListItem";
import styles from "./LinksSection.module.scss";

const LinksSection = () => {
  const { links, list, listItem, linkItem } = styles;

  const items = [
    {
      name: "/Slaughter To Prevail. Website",
      link: "https://www.behance.net/gallery/111190825/Slaughter-To-Prevail-Website",
    },
    {
      name: "/Ecovacs. e-commerce",
      link: "https://www.behance.net/gallery/95989871/Ecovacs-e-commerce",
    },
    {
      name: "/Store (app — desktop)",
      link: "https://www.behance.net/gallery/83062455/store-%28app-desktop%29",
    },
    {
      name: "/Smart Group. e-commerce",
      link: "https://www.behance.net/gallery/93301407/Smart-Group-e-commerce",
    },
  ];

  return (
    <section className={links}>
      <List listClass={list}>
        {items.map(({ name, link }, index) => {
          return (
            <ListItem
              key={index}
              text={name}
              link={link}
              itemClass={listItem}
              linkClass={linkItem}
              newTab={true}
            />
          );
        })}
      </List>
    </section>
  );
};

export default LinksSection;
