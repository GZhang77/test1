import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";

import Categories from "./Categories";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>{"1. Welcome to Chef Chu's Restaurant"}</h3>
        <Router>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/Categories">
            <button>Categories</button>
          </Link>

          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/Categories" component={Categories} exact />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
