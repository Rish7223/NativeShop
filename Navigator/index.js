import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../constants/COLORS';
import { createAppContainer } from 'react-navigation';

import Products from '../screens/Products';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile';
import ProductDetail from '../screens/ProductDetail';

const ProductStackNavigator = createStackNavigator(
  {
    Products: {
      screen: Products,
    },
    ProductDetail: {
      screen: ProductDetail,
    },
  },
  {
    headerMode: 'none',
  }
);

const tabScreensConfig = {
  Products: {
    screen: ProductStackNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name="home-outline" size={25} color={tabInfo.tintColor} />
      ),
    },
  },
  Cart: {
    screen: Cart,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name="cart-outline" size={25} color={tabInfo.tintColor} />
      ),
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name="person-outline" size={25} color={tabInfo.tintColor} />
      ),
    },
  },
};

const AppTabNavigation = createMaterialBottomTabNavigator(tabScreensConfig, {
  activeColor: COLORS.primaryColor,
  shifting: true,
  barStyle: {
    backgroundColor: '#fff',
  },
});

export default createAppContainer(AppTabNavigation);
