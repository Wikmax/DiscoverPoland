/** @format */
import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import MainSite from "./components/organisms/MainSite";
import Contact from "./components/views/Contact";
import AboutApp from "./components/views/AboutApp";

ReactDOM.render(
   <Router history={createBrowserHistory()}>
      <Switch>
         <Route exact path='/' component={MainSite} />
         <Route path='/contact' component={Contact} />
         <Route path='/about_app' component={AboutApp} />
      </Switch>
   </Router>,
   document.getElementById("root")
);
