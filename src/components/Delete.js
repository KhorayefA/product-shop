import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  delHandler = (item, url) => {
    console.log(this.state);
    fetch(url + "?ProductID=" + item, {
      mode: "core",
      method: "Delete",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Deleting Product</h1>
        <Link to="/">List</Link>
        <button
          type="button"
          onClick={() =>
            this.delHandler(prdct.prodId, "http://localhost:51391/api/product")
          }
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Delete;
