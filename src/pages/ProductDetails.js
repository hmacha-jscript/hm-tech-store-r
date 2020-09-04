import React, { useContext } from "react";
import { useParams, useHistory } from 'react-router-dom';
import { ProductContext } from '../context/products';
import Error from '../pages/Error';

export default function ProductDetails() {
  const { productId } = useParams();
  const history = useHistory();
  const { products } = useContext(ProductContext);
  const product = products.find(item => item.id === Number(productId))
  if (!product) {
    return <Error />
  }

  const { image: { url }, title, price, description } = product;

  return (
    <section className="single-product">
      <img src={url} alt="image" className="single-product-image" />
      <article>
        <h1>{title}</h1>
        <h2>{price}</h2>
        <p>{description}</p>
        <button
          className="btn btn-primary btn-block"
          onClick={() => { history.push('/cart') }}>add to cart</button>
      </article>
    </section>
  );
}
