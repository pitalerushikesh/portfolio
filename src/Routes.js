import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
