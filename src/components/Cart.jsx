import React, { useContext } from "react";
import "./Cart.css";
import { appContext } from "../App";

export default function Cart() {
  const { cart, setCart } = useContext(appContext);

  const handleRemoveFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length > 0 ? (
        <div className="App-Cart-Items">
          {cart.map((item, index) => (
            <div key={index} className="App-Cart-Item">
              <h3>{item.name}</h3>
              <h4>{item.price}</h4>
              <button onClick={() => handleRemoveFromCart(index)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <h2>Your cart is empty.</h2>
      )}
    </div>
  );
}
