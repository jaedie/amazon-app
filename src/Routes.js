import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Checkout from "./Checkout/Checkout";
import Signin from "./Signin/Signin";
import { useStateValue } from "../src/StateProvider";
import { auth } from "../src/firebase";

function Routes() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  console.log("USER IS>>>", user);

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
