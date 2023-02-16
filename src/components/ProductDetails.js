import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";
import "../ProductDetails.css";

function ProductDetails() {
  const api_url = "https://fakestoreapi.com/products";
  const params = useParams();
  console.log(params);
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
      .then((response) => response.json())
      .then((product) => setProduct(product));
      console.log(product);
  });
  return (
    <>
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <h5>{product.description}</h5>
          <h5 >{product.price}</h5>
        </div>
      </div>
    </>
  );
}
export default ProductDetails;
