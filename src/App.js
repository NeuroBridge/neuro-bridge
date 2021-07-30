import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome.jsx";
import Navigation from "./components/Navigation";
import About from "./components/About/About";
import News from "./components/News/News";
import "./App.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navigation />
      <div className="main-content">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/news">
            <News />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
