import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../constants/COLORS';
import { createAppContainer } from 'react-navigation';
import { ProductStackNavigator } from './ProductNavigator';
import Profile from '../screens/Profile';
import { CartStackNavigator } from './CartNavigator';

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
    screen: CartStackNavigator,
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
