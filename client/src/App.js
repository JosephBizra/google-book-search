import React from 'react';
import Search from "./Pages/Search";
import Saved from "./Pages/Saved";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav"

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/books" component={Search} />
          <Route exact path="/books/:id" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
