import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector([selectCartItems], (cart) =>
  cart.reduce((a, b) => {
    return a + b.quantity;
  }, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cart) =>
  cart.reduce((a, b) => {
    return a + b.quantity * b.price;
  }, 0)
);
