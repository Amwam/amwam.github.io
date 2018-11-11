import * as React from "react";
interface IProduct {
  name: string;
  link: string;
}

interface IProps {
  products: IProduct[];
}
export default function ProductList(props: IProps) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {props.products.map(product => (
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
