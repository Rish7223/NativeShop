import React, { useState } from 'react';
import { ImageBackground, Pressable, StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import UiHeader from '../components/Block/Header';
import COLORS from '../constants/COLORS';
import UiView from '../components/UI/View';
import ProductInfoBlock from '../components/Block/ProductInfo';
import UiAlert from '../components/UI/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../store/actions/cartActions';
import UiIconButton from '../components/UI/IconButton';

const ProductDetail = ({ navigation }) => {
  const [isFavItem, setIsFavItem] = useState(false);
  const productData = navigation.getParam('productData');
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

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
        </UiView>
        <UiIconButton
          style={Styles.addToCart}
          onPress={() => {
            const isAlready = cartItems.find(
              (item) => item.id === productData.id
            );
            addItemToCart(productData.id, dispatch, isAlready);
          }}
        >
          <Feather name="shopping-cart" size={20} color={COLORS.white} />
        </UiIconButton>
        <UiAlert />
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
    paddingTop: 20,
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

  empty: {
    minHeight: 50,
  },
});

export default ProductDetail;
