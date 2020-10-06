import React from "react";
import {  useDispatch } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import { addItemToCart } from "../../redux/cart/cart.actions";
import "./collection-items.style.scss";

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();
  const addItem = (item) => dispatch(addItemToCart(item));
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to Cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
