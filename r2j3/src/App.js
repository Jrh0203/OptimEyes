import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import Reading from "./pages/reading/reading";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/reading/xdarkmaster512x" component={Reading} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;