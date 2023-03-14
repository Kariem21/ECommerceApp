import Product from "./Product";
import "../App.css"
import "../productList.css";
import { useEffect } from "react";
import { useState } from "react";
function ProductList() {
  const api_url = "https://fakestoreapi.com/products";
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
      // console.log(products);
  };
  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };
  const getProductInCategory = (catName) => {
    // console.log(catName);
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  const [count,setCount] = useState(1);

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
  
  var buttons = document.getElementsByClassName("myButton");

  // Add a click event listener to each button
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      // Remove the "active" class from all buttons
      for (var j = 0; j < buttons.length; j++) {
        buttons[j].classList.remove("active");
      }
      // Add the "active" class to the clicked button
      this.classList.add("active");
    });
  }

  return (
    <>
      <h1 className="text-center p-3">Our Products</h1>
      <div className="container">
        <div className="divButtons" >
        <button
        className="pot  myButton  "
          onClick={() => {
            getProducts();
          }
        
        }
          
        >
          All
        </button>     
        {categories.map((cat,i) => {
          return (
            <button

              className="pot styledButton  myButton "
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
        {(products.length > 0)?(
          <div className="row1">
          {products.map((product) => {
            return (
              <div className="colo" key={product.id}>
                <Product product={product} showButton={true} />

              </div>
            );
          })}
        </div>
        ): (<h1>Not Found</h1>)}

        
      </div>
    </>
  );
}

export default ProductList;
