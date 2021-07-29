import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import Line from "../../components/Decorative/Line/Line";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./Layout.module.scss";

class Layout extends Component {
  state = {
    lang: "en",
  };

  changeLangHandler = (e) => {
    e.preventDefault();
    this.props.i18n.changeLanguage(e.target.value);
    this.setState((state) => {
      return {
        lang: e.target.value,
      };
    });
  };

  render() {
    const { lang } = this.state;
    const { i18n } = this.props;

    return (
      <>
        <Header lang={lang} onChangeLang={this.changeLangHandler} />
        <main className={styles.layout}>{this.props.children}</main>
        <Line style={1 / -1} />
        <Footer />
      </>
    );
  }
}

export default withTranslation()(Layout);
