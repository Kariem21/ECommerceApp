import React from "react";
import image1 from "./images/landing3.jpg";
import "../App.css"

function Navbar() {
  return (
    <>
      <nav>
    <h1>E-Commerce App</h1>
</nav>
<div>            <img  src={image1} className="imglanding" alt="..." />
</div>
    </>
  );
}
export default Navbar;
