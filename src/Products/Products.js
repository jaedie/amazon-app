import React from "react";
import "./Products.scss";
import { useStateValue } from "../StateProvider";

function Products({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className="products">
      <p className="products__title">{title}</p>
      <p className="products__price">
        <strong>${price}</strong>
      </p>
      <div className="products__rating">
        {Array(rating)
          .fill()
          .map((el, idx) => (
            <p key={idx}>⭐️</p>
          ))}
      </div>
      <img src={image} alt={id} className="products__image" />
      <button onClick={addToBasket}>Add to cart</button>
    </div>
  );
}

export default Products;
