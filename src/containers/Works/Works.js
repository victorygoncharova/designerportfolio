import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import Line from "../../components/Decorative/Line/Line";
import Animations from "../../components/Sections/Animations/Animations";
import Covers from "../../components/Sections/Covers/Covers";
import Posters from "../../components/Sections/Posters/Posters";
import Promo from "../../components/Sections/Promo/Promo";
import List from "../../components/UI/List/List";
import ListItem from "../../components/UI/ListItem/ListItem";
import styles from "./Works.module.scss";

class Works extends Component {
  state = {
    type: "promo",
    clicked: 1,
  };

  render() {
    const { t } = this.props;
    const { works, worksList, worksItem, clicked } = styles;
    const items = [
      {
        name: t("websites"),
        type: "websites",
        link: "https://overcoder.net/q/1131812/%D0%BA%D0%B0%D0%BA-%D1%81%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C-%D1%81%D1%81%D1%8B%D0%BB%D0%BA%D1%83-%D0%BD%D0%B0-%D0%B4%D1%80%D1%83%D0%B3%D1%83%D1%8E-%D0%B2%D0%B5%D0%B1-%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D1%83-%D0%BD%D0%B0-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%B5-%D0%B2%D0%B2%D0%BE%D0%B4%D0%B0-%D0%B2-reactjs",
      },
      {
        name: t("promoMaterials"),
        type: "promo",
      },
      {
        name: t("posters"),
        type: "posters",
      },
      {
        name: t("youtubeCovers"),
        type: "covers",
      },
      {
        name: t("animations"),
        type: "animations",
      },
    ];

    this.clickFunctionHandler = ({ target }) => {
      const parent = target.closest("li");
      if (!parent) return;
      console.log(parent.dataset.index);

      this.setState(({ type, clicked }) => {
        return {
          type: parent.dataset.type,
          clicked: +parent.dataset.index,
        };
      });
    };

    let workType = null;

    switch (this.state.type) {
      case "posters":
        workType = <Posters />;
        break;
      case "covers":
        workType = <Covers />;
        break;
      case "animations":
        workType = <Animations />;
        break;
      case "promo":
        workType = <Promo />;
        break;
      default:
        break;
    }

    return (
      <>
        <section className={works}>
          <List listClass={worksList}>
            {items.map(({ name, type }, index) => {
              return type === "websites" ? (
                <li key={index} className={worksItem}>
                  <a href="https://www.behance.net/VadimKalinin" target="blank">
                    {name}
                  </a>
                </li>
              ) : (
                <ListItem
                  key={index}
                  text={name}
                  itemClass={worksItem}
                  clickFunction={this.clickFunctionHandler}
                  type={type}
                  index={index}
                  isClicked={this.state.clicked}
                />
              );
            })}
          </List>
          <Line />
          {workType}
        </section>
      </>
    );
  }
}

export default withTranslation()(Works);
