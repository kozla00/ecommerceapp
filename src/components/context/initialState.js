import { fetchCart, fetchUser } from "../../utils/fetchLocalStorageData";

const userInfo = fetchUser();
const cartInfo = fetchCart();

export const initialState = {
  user: userInfo,
  furnitureItems: null,
  cartShow: false,
  cartItems: cartInfo,
};