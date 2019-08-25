import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/navbar/navbar";
import Homepage from "./pages/homepage/homepage";
import Reading from "./pages/reading/reading";
import "./App.css";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/reading/xdarkmaster512x" component={Reading} />
          </Switch>
          <p className="disclaimer">Yuuvis slaved all day in the kitchen for this</p>
        </div>
      </Router>
    );
  }
}

export default App;