import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Modify from "../components/Modify";

class GetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      products: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:51391/api/product")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          products: json
        });
      });
  }

  delHandler = (item, url) => {
    console.log(this.state);
    fetch(url + "?ProductID=" + item, {
      mode: "cors",
      method: "Delete",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(response => {
        this.componentDidMount();
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

  render() {
    var { isLoaded, products } = this.state;

    return (
      <tbody>
        {this.componentDidMount()}
        {products.map(product => (
          <tr key={product.ProductId}>
            <th scope="row">{product.ProductId}</th>
            <td>{product.Name}</td>
            <td>{product.Price}</td>
            <td>{product.Description}</td>
            <td>{product.Category}</td>
            <td>
              <button
                class="btn btn-danger"
                type="submit "
                onClick={() => {
                  if (
                    window.confirm("Are you sure you wish to delete this item?")
                  )
                    this.delHandler(
                      product.ProductId,
                      "http://localhost:51391/api/product"
                    );
                }}
              >
                Delete
              </button>
            </td>

            {/* <Link to="/Modify">Modify</Link>
            <br />
            <Link to="/Add">Delete</Link> */}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default GetForm;
