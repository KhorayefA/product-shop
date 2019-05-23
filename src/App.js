import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import List from "./components/List";
import Add from "./components/Add";
import Modify from "./components/Modify";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
      Abulaaah was here from GitHup
          <div>
            <Route path="/" exact component={List} />
            <Route path="/Add" exact component={Add} />
            <Route path="/Modify" exact component={Modify} />
            <Route path="/Add/:requestID" exact component={Add} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
