import React from 'react';
import { StyleSheet, View } from 'react-native';
import CategoriesBlock from '../components/Block/Categories';
import HorizontalProductView from '../components/Block/HorizontalProductView';
import UiText from '../components/UI/Text';
import UiView from '../components/UI/View';
import COLORS from '../constants/COLORS';

const data = [
  {
    id: 2,
    title: 'Slim Fit T-Shirts ',
    price: 22.3,
    description:
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    category: "men's clothing",
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
  },
  {
    id: 19,
    title: 'Short Sleeve Moisture',
    price: 7.95,
    description:
      '100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort',
    category: "women's clothing",
    image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
  },
];

const Products = ({ navigation }) => {
  return (
    <UiView style={styles.screen}>
      <View style={styles.head}>
        <UiText style={styles.heading}>NativeShop</UiText>
        <UiText style={styles.subHeading}>A perfect shoppers stop</UiText>
      </View>
      <CategoriesBlock />
      <HorizontalProductView
        data={data}
        navigation={navigation}
        headTitle="Popular Products"
      />
      <View style={styles.empty}></View>
    </UiView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: 50,
  },
  head: {
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 25,
    fontFamily: 'Nunito-Bold',
    color: COLORS.primaryColor,
  },
  subHeading: {
    fontSize: 16,
    color: COLORS.textColorLight,
  },
  empty: {
    minHeight: 60,
  },
});

export default Products;
