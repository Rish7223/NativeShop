import { createStackNavigator } from 'react-navigation-stack';
import Cart from '../screens/Cart';
import ProductDetail from '../screens/ProductDetail';

export const CartStackNavigator = createStackNavigator(
  {
    Cart: {
      screen: Cart,
    },
    CartProductDetail: {
      screen: ProductDetail,
    },
  },
  {
    headerMode: 'none',
  }
);
