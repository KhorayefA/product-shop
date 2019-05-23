import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GetForm from "../api/GetForm";
import Add from "./Add";

class Modify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  modHandler = (item, url) => {
    console.log(this.state);
    fetch(url + "?ProductID=" + item, {
      mode: "cors",
      method: "PUT",
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
        <h1 style={{ textAlign: "center" }}>Modifing Product</h1>
        <Link to="/">List</Link>

        <Add />
        <button
          class="btn btn-danger"
          type="button"
          onClick={() =>
            this.modHandler(
              this.props.product.ProductId,
              "http://localhost:51391/api/product"
            )
          }
        >
          Modify
        </button>
      </div>
    );
  }
}

export default Modify;
