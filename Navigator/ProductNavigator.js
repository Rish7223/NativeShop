import { createStackNavigator } from 'react-navigation-stack';
import Category from '../screens/Category';
import ProductDetail from '../screens/ProductDetail';
import Products from '../screens/Products';

export const ProductStackNavigator = createStackNavigator(
  {
    Products: {
      screen: Products,
    },
    ProductDetail: {
      screen: ProductDetail,
    },
    Category: {
      screen: Category,
    },
  },
  {
    headerMode: 'none',
  }
);
