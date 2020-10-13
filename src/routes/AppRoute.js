import React, { Component,Fragment } from 'react';
import { Switch,Route} from "react-router-dom";

// pages
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import Header from '../layer/Header/Header';
import Footer from '../layer/Footer.js/Footer';
import Orders from '../pages/Orders';
import Checkout from '../pages/Checkout';
import BurgerBuilder from '../components/BurgerBuilder/BurgerBuilder';


class AppRoute extends Component {

  render() {
    return (
      <Fragment>

        <Header />

        <Switch>
          {/* <Route exact path='/' component={Home}/> */}
          <Route exact path='/' component={BurgerBuilder}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/orders' component={Orders}/>
          <Route exact path='/checkout' component={Checkout}/>
          <Route path='*' component={NotFound}/>
        </Switch>

        <Footer />

      </Fragment>
    )
  }
}

export default  AppRoute;