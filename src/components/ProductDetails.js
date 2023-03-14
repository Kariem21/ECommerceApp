import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import "../ProductDetails.css";
import { useNavigate } from "react-router-dom";

function ProductDetails() {
  const api_url = "https://fakestoreapi.com/products";
  const params = useParams();
  console.log(params);
  const [product, setProduct] = useState({});
  const nav = useNavigate();

  useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
      .then((response) => response.json())
      .then((product) => setProduct(product));
      console.log(product);
  });
  return (
    <>
      <div className="">
        <img src={product.image} className="imgdetail" alt={product.title} />
        <div className="textcont">
          <h5 className="h5title">{product.title}</h5>
          <h5 className="h5des">{product.description}</h5>
          <h5 className="h5title">{product.price}</h5>
        </div>

            <Link onClick={() => nav(-1)} className="  buttonInCard" >
              Back To Home
            </Link>
         
      </div>
    </>
  );
}
export default ProductDetails;
