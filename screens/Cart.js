import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, ImageBackground } from 'react-native';
import CartHeaderBlock from '../components/Block/CartHeader';
import CartProductCard from '../components/Block/CartProductCard';
import { useSelector } from 'react-redux';
import UiButton from '../components/UI/Button';
import COLORS from '../constants/COLORS';
import UiText from '../components/UI/Text';
import { LinearGradient } from 'expo-linear-gradient';
import EmptyCart from '../components/Block/EmptyCart';
import PaymentModelSection from '../components/Section/PaymentModel';

const Cart = ({ navigation }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModelVisible, setModelVisible] = useState(false);
  useEffect(() => {
    let priceTotal = 0;
    cartItems.forEach((item) => {
      priceTotal += Number(item.price);
    });
    setTotalPrice(Number(priceTotal).toFixed(2));
  }, [cartItems]);
  return (
    <View style={styles.view}>
      <PaymentModelSection
        navigation={navigation}
        isVisible={isModelVisible}
        setIsVisible={setModelVisible}
        totalPrice={totalPrice}
      />
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
              onPress={() => {
                setModelVisible(true);
              }}
            >
              Checkout
            </UiButton>
            <UiText style={styles.checkoutPrice}>Price: ${totalPrice}</UiText>
          </LinearGradient>
        </>
      ) : (
        <EmptyCart />
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
});

export default Cart;
