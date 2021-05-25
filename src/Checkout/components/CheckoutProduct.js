import React from "react";

function CheckoutProduct({ item, title, image, rating, price }) {
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐️</p>
          ))}
      </div>
    </div>
  );
}

export default CheckoutProduct;
