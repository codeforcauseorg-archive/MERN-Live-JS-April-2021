import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./pages/About";
import Topics from "./pages/Topics";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
