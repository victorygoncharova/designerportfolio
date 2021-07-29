import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contacts from "./containers/Contacts/Contacts";
import Home from "./containers/Home/Home";
import Works from "./containers/Works/Works";
import Layout from "./hoc/Layout/Layout";

class App extends Component {
  state = {
    lang: "en",
    isHome: true,
  };

  componentDidMount() {
    this.props.i18n.changeLanguage(this.state.lang);
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/works" render={(props) => <Works {...props} />} />
              <Route
                path="/contacts"
                render={(props) => <Contacts {...props} />}
              />
            </Switch>
          </Layout>
        </BrowserRouter>
      </>
    );
  }
}

export default withTranslation()(App);
