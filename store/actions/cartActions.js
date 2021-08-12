import {
  GET_CART_ITEMS,
  ADD_ITEM_CART,
  SET_ALERT,
  REMOVE_ALERT,
} from './types';
import products from '../../dummy_data/products';

export const getCartItems = async (dispatch) => {
  try {
    const data = dispatch({ type: GET_CART_ITEMS });
  } catch (error) {
    console.log(error);
  }
};

export const addItemToCart = async (productId, dispatch, isAlready) => {
  const product = products.find((item) => item.id === productId);
  if (!isAlready) {
    dispatch({ type: ADD_ITEM_CART, payload: product });
    dispatch({
      type: SET_ALERT,
      payload: { message: 'Added to cart', type: 'success' },
    });
  } else {
    dispatch({
      type: SET_ALERT,
      payload: { message: 'Already listed', type: 'success' },
    });
  }

  setTimeout(() => {
    dispatch({
      type: REMOVE_ALERT,
    });
  }, 3000);
};
