import { Link } from "react-router-dom";
import "../Product.css";

import { BiCart } from "react-icons/bi";

function Product(props) {
  const { product, showButton } = props;
  return (
    <>
      {/* <div className="card">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
        
          <h5 className="card-title">{product.title}</h5>
          {showButton && (
            <Link className=" margButton buttonInCard" to={`/product/${product.id} `}>
              Details
            </Link>
          )}
         
        </div>
      </div> */}
      <div class="card">
        <div class="card-img">
          <img src={product.image} className="img" alt={product.title} />
        </div>
        <div class="card-info">
          <p class="text-title">{product.title} </p>
        </div>
        <div class="card-footer">
          <span class="text-title">${product.price}</span>
          <div class="card-button">
            <BiCart />
          </div>
        </div>
        <div>
        
            <Link className="  buttonInCard" to={`/product/${product.id} `}>
              Details
            </Link>
      
        </div>
       
      </div>
    </>
  );
}
export default Product;
