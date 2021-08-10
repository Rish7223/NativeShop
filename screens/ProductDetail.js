import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import UiText from '../components/UI/Text';
import { Feather } from '@expo/vector-icons';
import UiHeader from '../components/Block/Header';
import COLORS from '../constants/COLORS';
import UiView from '../components/UI/View';
import ProductInfoBlock from '../components/Block/ProductInfo';

const ProductDetail = ({ navigation }) => {
  const [isFavItem, setIsFavItem] = useState(false);
  const productData = navigation.getParam('productData');

  function toggleFavHandler() {
    setIsFavItem(!isFavItem);
  }
  return (
    <View style={Styles.screen}>
      <UiHeader
        navigation={navigation}
        onPress={toggleFavHandler}
        isFav={isFavItem}
      />
      <View style={Styles.imageView}>
        <ImageBackground
          source={{
            uri: productData.image,
          }}
          resizeMode="center"
          style={Styles.productImage}
        />
      </View>
      <View style={Styles.infoView}>
        <UiView style={Styles.container}>
          <ProductInfoBlock data={productData} />
          <View style={Styles.empty}></View>
        </UiView>
        <Pressable style={Styles.addToCart}>
          <Feather name="shopping-cart" size={20} color={COLORS.white} />
          {/* <UiText style={Styles.addBtnText}>Add to cart</UiText> */}
        </Pressable>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    position: 'relative',
    backgroundColor: COLORS.white,
  },

  imageView: {
    flex: 1,
    paddingVertical: 40,
  },
  productImage: {
    height: '100%',
    width: '100%',
    transform: [{ translateY: 30 }],
  },
  infoView: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: COLORS.bgColor,
    elevation: 40,
    paddingVertical: 20,
  },
  container: {
    paddingHorizontal: 15,
  },

  addToCart: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 10,
    right: 10,
    alignSelf: 'center',
    padding: 15,
    borderRadius: 50,
    elevation: 5,
    backgroundColor: COLORS.primaryColor,
  },
  // addBtnText: {
  //   marginLeft: 20,
  //   fontSize: 20,
  //   fontFamily: 'Nunito-SemiBold',
  //   color: COLORS.white,
  // },

  empty: {
    minHeight: 50,
  },
});

export default ProductDetail;
