import React, { Component } from "react";

export default class ProductList extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {this.props.products.map(product => (
          <div
            key={product.name}
            style={{ flex: 1, padding: 5, flexBasis: "25%" }}
          >
            <strong>
              <a href={product.link}>{product.name}</a>
            </strong>
          </div>
        ))}
      </div>
    );
  }
}
