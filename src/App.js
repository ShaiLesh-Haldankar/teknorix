import React from "react";
import { Redirect, Route, Switch } from "react-router";
import "./App.scss";
import HomePAge from "./Components/HomePage/HomePage";
import JobDetails from "./Components/JobDetails/JobDetails";

const App = () => {
  return (
    <div className="main-app">
      <Switch>
        <Route path="/:id" component={JobDetails} />
        <Route path="/" component={HomePAge} />
      </Switch>
    </div>
  );
};

export default App;
