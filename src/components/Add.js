import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductID: "",
      Name: "",
      Category: "",
      Price: "",
      Description: ""
    };
  }

  infoForm = () => {
    console.log("ProductID: " + this.state.ProductID);
    console.log("Name: " + this.state.Name);
    console.log("Category: " + this.state.Category);
    console.log("Price: " + this.state.Price);
    console.log("Description: " + this.state.Description);
  };

  RestIt = () => {
    this.setState({
      ProductID: "",
      Name: "",
      Category: "",
      Price: "",
      Description: ""
    });
  };

  submitHandler = () => {
    console.log(this.state);
    fetch("http://localhost:51391/api/product", {
      method: "POST",
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

  // handleChange = event => {
  //   this.setState({ Name: event.target.value });
  // };

  render() {
    const { Description, Category, Price } = this.state;

    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Adding Product</h1>
        <Link to="/">List</Link>

        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            <label>ProductID: </label>
            <input
              className="form-control"
              type="text"
              name="ProductID"
              value={this.state.ProductID}
              onChange={e => this.setState({ ProductID: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              name="fname"
              className="form-control"
              value={this.state.Name}
              onChange={e => this.setState({ Name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Category: </label>
            <select
              className="form-control"
              name="Category"
              onChange={e => this.setState({ Category: e.target.value })}
            >
              <option value={Category} />
              <option value="Saudi">Saudi</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Emirates">Emirates</option>
              <option value="Egypt">Egypt</option>
            </select>
          </div>
          <div className="form-group">
            <label>Price: </label>
            <input
              className="form-control"
              type="text"
              name="Price"
              value={Price}
              onChange={e => this.setState({ Price: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Description </label>
            <input
              className="form-control"
              type="text"
              name="Description"
              value={Description}
              onChange={e => this.setState({ Description: e.target.value })}
            />
          </div>

          <div className="btn-group" role="group" aria-label="...">
            <Link
              className="btn btn-primary"
              onClick={() => this.submitHandler()}
              to="/"
            >
              Submit
            </Link>

            <button
              type="reset"
              value="Reset"
              onClick={this.RestIt}
              className="btn btn-primary"
            >
              Reset
            </button>
            <button
              class="btn btn-danger"
              type="button"
              onClick={() =>
                this.modHandler(
                  this.state.ProductID,
                  "http://localhost:51391/api/product"
                )
              }
            >
              Modify
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Add;
