import React from "react";
import Header from "../Header/Header";
import { useStateValue } from "../StateProvider";
import "./Checkout.scss";
import CheckoutProduct from "./components/CheckoutProduct";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <Header />
      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping Basket is empty</h2>
          <p>
            You have no items in your basket. To buy one or more items, click
            "Add to basket" next to the item.
          </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              item={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;
