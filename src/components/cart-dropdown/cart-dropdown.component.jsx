import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.style.scss";

const CartDropdown = () => {
  const cartItems = useSelector(({ cart: { cartItems } }) => cartItems);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default React.memo(CartDropdown);
