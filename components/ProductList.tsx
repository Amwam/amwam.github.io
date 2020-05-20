import * as React from 'react';

interface IProduct {
  name: string;
  link: string;
}

interface IProps {
  products: IProduct[];
}
export default function ProductList(props: IProps) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {props.products.map((product) => (
        <div
          key={product.name}
          className="col-md-4 col-sm-6 col-xs-12 product-item"
        >
          <strong>
            <a href={product.link}>{product.name}</a>
          </strong>
        </div>
      ))}
    </div>
  );
}
