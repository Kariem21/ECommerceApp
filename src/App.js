import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product/:productId" element={<ProductDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
