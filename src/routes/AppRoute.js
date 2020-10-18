import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

// pages
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import Header from '../layer/Header/Header';
import Footer from '../layer/Footer.js/Footer';
import Orders from '../pages/Orders';
import Checkout from '../pages/Checkout';
import BurgerBuilder from '../components/BurgerBuilder/BurgerBuilder';
import Auth from '../components/Auth/Auth';
import { connect } from 'react-redux';


class AppRoute extends Component {

  render() {
    let routes = null;
    if (this.props.token === null) {
      routes = (
        <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path='/login' component={Auth} />
          <Redirect to="/login"/>
          <Route path='*' component={NotFound} />
        </Switch>
      )
    }
    else {
      routes = (
        <Switch>
          <Route exact path='/' component={BurgerBuilder} />
          <Route exact path='/about' component={About} />
          <Route exact path='/orders' component={Orders} />
          <Route exact path='/checkout' component={Checkout} />
          <Redirect to="/"/>
          <Route path='*' component={NotFound} />
        </Switch>
      )
    }
    return (
      <Fragment>

        <Header />

        {routes}

        <Footer />

      </Fragment>
    )
  }
};

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    userId: state.auth.userId,
  }
};

export default connect(mapStateToProps)(AppRoute);