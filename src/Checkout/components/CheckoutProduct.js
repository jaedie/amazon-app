import React from "react";
import "./CheckoutProduct.scss";
import { useStateValue } from "../../StateProvider";

function CheckoutProduct({ id, title, image, rating, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__ratings">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
        <button className="checkoutProduct__btn" onClick={removeFromBasket}>
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
