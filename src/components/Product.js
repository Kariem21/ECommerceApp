import { Link } from "react-router-dom";
import "../Product.css";

function Product(props) {
  const { product, showButton } = props;
  return (
    <>
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
        
          <h5 className="card-title">{product.title}</h5>
          {showButton && (
            <Link className=" margButton buttonInCard" to={`/product/${product.id} `}>
              Details
            </Link>
          )}
         
        </div>
      </div>
    </>
  );
}
export default Product;
