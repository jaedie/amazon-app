import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Checkout from "./Checkout/Checkout";
import Signin from "./Signin/Signin";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default Routes;
