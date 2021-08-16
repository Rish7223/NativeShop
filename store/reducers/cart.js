import products from '../../dummy_data/products';
import {
  GET_CART_ITEMS,
  ADD_ITEM_CART,
  REMOVE_ITEM_CART,
} from '../actions/types';

const initialState = {
  items: [],
  loading: false,
  alert: null,
};

const cart = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CART_ITEMS:
      return state;
    case ADD_ITEM_CART:
      return { ...state, items: [payload, ...state.items] };
    case REMOVE_ITEM_CART:
      return { ...state, items: payload };
    default:
      return state;
  }
};

export default cart;
