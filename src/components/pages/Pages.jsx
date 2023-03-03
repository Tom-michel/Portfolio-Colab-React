import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Header } from '../common/Header';
import { Home } from '../home/Home';
import { Services } from './Services';
import { About } from './About';
import { Portfolio } from './Portfolio';
import { Testimonials } from './Testimonials';

export const Pages = () => {
  return <>
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/testimonials" component={Testimonials} />
      </Switch>
    </Router>
  </>
}
