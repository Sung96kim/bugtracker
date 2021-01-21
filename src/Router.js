import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./Containers/HomePage";
import LoginPage from "./Containers/Login/LoginPage";

class BugTrackerRouter extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/login" />} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/home" component={HomePage} />
            </Switch>
        </Router>
    );
  } 
}

export default BugTrackerRouter;