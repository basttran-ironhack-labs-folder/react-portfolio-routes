import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import AboutUs from "./components/AboutUs";
import HomePage from "./components/HomePage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Portfolio Site of Nizar</h1>
          <nav>Under construction...</nav>
        </header>

        {/* 
        Switch defines a part of your app that changes based on the URL
        (only choose one piece of content in the list)
        */}
        <Switch>
          {/* 
          Each Route defines one potential content that could appear
          (it associates a URL with a component)
          */}
          <Route exact path="/" component={HomePage} />

          <Route path="/about" component={AboutUs} />
        </Switch>
        <footer>
          <p>Made with Haste @ Ironhack</p>
        </footer>
      </div>
    );
  }
}

export default App;
