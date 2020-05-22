import * as React from "react";
import styles from "./styles/ProductList.module.css";

interface IProduct {
  name: string;
  link: string;
}

interface IProps {
  products: IProduct[];
}
export default function ProductList(props: IProps) {
  return (
    <div className={styles.list}>
      {props.products.map((product) => (
        <div key={product.name} className={styles.productItem}>
          <strong>
            <a href={product.link}>{product.name}</a>
          </strong>
        </div>
      ))}
    </div>
  );
}
