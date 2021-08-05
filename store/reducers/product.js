import { GET_PRODUCTS_BY_CATEGORY, GET_PRODUCT_DETAIL } from '../actions/types';
import PRODUCTS from '../../dummy_data/products';
const initialState = {
  products: PRODUCTS,
  categoryProducts: [],
  productDetail: {},
  loading: false,
};

const productReducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    default:
      return state;
  }
};

export default productReducer;
