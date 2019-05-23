import React, { Component } from "react";
import { Table, Column, Cell } from "fixed-data-table";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GetForm from "../api/GetForm";
import Modify from "./Modify";

const url = "http://localhost:51391/api/product";

class List extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Products List</h1>
        <Link to="/Add">Add</Link>

        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
            </tr>
          </thead>
          <GetForm />
        </table>
      </div>
    );
  }
}

export default List;
