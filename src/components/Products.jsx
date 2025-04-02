import React, { useContext } from "react";
import "./Products.css";
import { appContext } from "../App";

export default function Products() {
  const { user, products, cart, setCart } = useContext(appContext);

  // Function to add a product to the cart
  const handleAddToCart = (product) => {
    setCart([...cart, product]); // Add the product to the cart
  };

  return (
    <div>
      <h1>Hello {user.name || "Guest"}</h1>
      <div className="App-Products-Row">
        {products.map((product, index) => (
          <div key={index} className="App-Products-Box">
            <h3>{product.name}</h3>
            <h4>${product.price}</h4>
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
