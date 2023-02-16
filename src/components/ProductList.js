import Product from "./Product";
import "../App.css"
import "../productList.css";
import { useEffect } from "react";
import { useState } from "react";
import "../App.css";
function ProductList() {
  const api_url = "https://fakestoreapi.com/products";
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
      console.log(products);
  };
  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };
  const getProductInCategory = (catName) => {
    console.log(catName);
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
  return (
    <>
      <h1 className="text-center p-3">Our Products</h1>
      <div className="container">
        <div className="divButtons">
        <button
        className="pot"
          //className="btn btn-info"
          onClick={() => {
            getProducts();
          }}
        >
          All
        </button>
        {categories.map((cat) => {
          return (
            <button
              className="pot styledButton"
              key={cat}
              onClick={() => {
                getProductInCategory(cat);
              }}
            >
              {cat}
            </button>
          );
        })}
        </div>
        

        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <Product product={product} showButton={true} />

              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductList;
