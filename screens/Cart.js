import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, ImageBackground } from 'react-native';
import CartHeaderBlock from '../components/Block/CartHeader';
import CartProductCard from '../components/Block/CartProductCard';
import { useSelector } from 'react-redux';
import UiButton from '../components/UI/Button';
import COLORS from '../constants/COLORS';
import UiText from '../components/UI/Text';
import { LinearGradient } from 'expo-linear-gradient';

const Cart = ({ navigation }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let priceTotal = 0;
    cartItems.forEach((item) => {
      priceTotal += Number(item.price);
    });
    setTotalPrice(Number(priceTotal).toFixed(2));
  }, [cartItems]);
  return (
    <View style={styles.view}>
      <CartHeaderBlock navigation={navigation} />
      {cartItems.length > 0 ? (
        <>
          <View style={styles.screen}>
            <ScrollView style={styles.list}>
              {cartItems.map((productData) => (
                <CartProductCard
                  totalPrice={totalPrice}
                  setTotalPrice={setTotalPrice}
                  productData={productData}
                  key={productData.id}
                  navigation={navigation}
                />
              ))}
              <View style={styles.emptyItem}></View>
            </ScrollView>
          </View>
          <LinearGradient
            colors={[COLORS.whiteTrans, COLORS.white]}
            style={styles.checkout}
          >
            <UiButton
              style={styles.checkoutBtn}
              textStyle={styles.checkoutText}
            >
              Checkout
            </UiButton>
            <UiText style={styles.checkoutPrice}>Price: ${totalPrice}</UiText>
          </LinearGradient>
        </>
      ) : (
        <View style={styles.emptyPage}>
          <View style={styles.illustration}>
            <ImageBackground
              resizeMode="center"
              style={styles.illustrationImage}
              source={require('../assets/images/empty-cart.png')}
            ></ImageBackground>
          </View>
          <View style={styles.emptyTextBox}>
            <UiText style={styles.emptyText}>Your cart is empty.</UiText>
            <UiText style={styles.emptyText}>Please add a few items.</UiText>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    position: 'relative',
    backgroundColor: COLORS.bgColor,
  },
  screen: {
    position: 'relative',
  },
  list: {
    paddingHorizontal: 15,
    transform: [{ translateY: 90 }],
  },
  emptyItem: {
    minHeight: 170,
  },
  checkout: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 15,
    alignSelf: 'center',
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkoutBtn: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: COLORS.primaryColor,
    marginRight: 10,
    elevation: 3,
  },
  checkoutText: {
    fontFamily: 'Nunito-Bold',
    color: COLORS.white,
    fontSize: 15,
  },
  checkoutPrice: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    fontFamily: 'Nunito-Bold',
    fontSize: 15,
    textAlign: 'center',
    elevation: 3,
  },
  emptyPage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustration: {
    height: 200,
    width: 300,
  },
  illustrationImage: {
    height: '100%',
    width: '100%',
  },
  emptyTextBox: {
    marginTop: 20,
  },
  emptyText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 22,
    letterSpacing: 0.7,
  },
});

export default Cart;
