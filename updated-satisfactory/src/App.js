import './App.css';
import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home.js'
import About from './components/About.js'
import MeetShopcat from './components/meetShopcat.js'
import TourTheShop from './components/tourTheShop.js'
import ApparelScreenprinting from './components/apparelScreenprinting.js'
import GraphicDesign from './components/graphicDesign.js'
import GreekLicensing from './components/greekLicensing.js'
import PopularGarmets from './components/popularGarmets.js'
import ArtworkRequirements from './components/artworkRequirements.js'
import PaymentAndShipping from './components/paymentAndShipping.js'
import EnamelPins from './components/enamelPins.js'
import QuoteRequest from './components/quoteRequest.js'
// import Navigation from "./components/Navigation.js"
import Header from "./components/Header.js"

class App extends Component {
  render() {
    return (
      <Fragment>
      <Header />
      {/* <Navigation /> */}
      
      <Router>
        <Fragment>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/about" exact render={() => <About />} />
          <Route path="/meet-shopcat" exact render={() => <MeetShopcat />} />
          <Route path="/tour-the-shop" exact render={() => <TourTheShop />} />
          <Route path="/apparel-screenprinting" exact render={() => <ApparelScreenprinting />} />
          <Route path="/graphic-design" exact render={() => <GraphicDesign />} />
          <Route path="/greek-licensing" exact render={() => <GreekLicensing />} />
          <Route path="/popular-garmets" exact render={() => <PopularGarmets />} />
          <Route path="/artwork-requirements" exact render={() => <ArtworkRequirements />} />
          <Route path="/payment-and-shipping" exact render={() => <PaymentAndShipping />} />
          <Route path="/enamel-pins" exact render={() => <EnamelPins />} />
          <Route path="/quote-request" exact render={() => <QuoteRequest />} />
        </Fragment>
      </Router>
      </Fragment>
    )
  }
};


export default App;
