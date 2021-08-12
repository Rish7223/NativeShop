import { combineReducers } from 'redux';
import product from '../reducers/product';
import cart from './cart';
import alert from './alert';

export default combineReducers({
  alert,
  product,
  cart,
});
