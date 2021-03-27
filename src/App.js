import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/views/Home/Home";
import Favorite from "./views/Favorite/Favorite.js";

import "./App.css";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/favorites">
            <Favorite />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
