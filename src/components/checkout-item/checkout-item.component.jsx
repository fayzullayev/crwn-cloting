import React from "react";
import { useDispatch } from "react-redux";
import {
  clearItemFromCart,
  removeItem,
  addItemToCart,
} from "../../redux/cart/cart.actions";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();

  const clearItem = () => dispatch(clearItemFromCart(cartItem));
  const increaseItem = () => dispatch(addItemToCart(cartItem));
  const decreaseItem = () => dispatch(removeItem(cartItem));

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decreaseItem}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={increaseItem}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span onClick={clearItem} className="remove-button">
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
