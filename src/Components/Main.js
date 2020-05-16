import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Products from "./Products";
import Orders from "./Orders";

function Main() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/orders" component={Orders} />
        <Redirect from="*" to="/" />
      </Switch>
    </div>
  );
}

export default Main;
