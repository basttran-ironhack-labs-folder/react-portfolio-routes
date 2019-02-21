import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";

import "./App.css";
import AboutUs from "./components/AboutUs.js";
import HomePage from "./components/HomePage.js";
import ProjectList from "./components/ProjectList.js";
import NotFound from "./components/NotFound.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Portfolio Site of Nizar</h1>
          <nav>
            {/* 
            USe NavLink for cool React navigation WITHOUT refresh
            (NavLinks adds a special "active" class)
             */}
            <NavLink to="/">Home</NavLink>
            {/* <a href="/">Home</a> */}
            <NavLink to="/about">About Me</NavLink>
            <NavLink to="/project-list">Projects</NavLink>
          </nav>
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

          <Route path="/project-list" component={ProjectList} />

          <Route component={NotFound} />
        </Switch>
        <footer>
          <p>Made with Haste @ Ironhack</p>
        </footer>
      </div>
    );
  }
}

export default App;
