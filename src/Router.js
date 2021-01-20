import React, { Component } from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./Containers/HomePage";
import LoginPage from "./Containers/LoginPage";

class bugTrackerRouter extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/home" component={HomePage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default bugTrackerRouter;