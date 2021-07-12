import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome.jsx";
import Navigation from "./components/Navigation";
import About from "./components/About/About";
import News from "./components/News/News";

function App() {
  return (
    <>
      <Router>
        <Navigation />
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
      </Router>
    </>
  );
}

export default App;
