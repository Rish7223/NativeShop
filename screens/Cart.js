import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import CartHeaderBlock from '../components/Block/CartHeader';
import CartProductCard from '../components/Block/CartProductCard';
import { useSelector } from 'react-redux';
import UiButton from '../components/UI/Button';
import COLORS from '../constants/COLORS';
import UiText from '../components/UI/Text';

const Cart = ({ navigation }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <View style={styles.view}>
      <View style={styles.screen}>
        <CartHeaderBlock navigation={navigation} />
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
        </ScrollView>
      </View>
      <View style={styles.checkout}>
        <UiButton style={styles.checkoutBtn} textStyle={styles.checkoutText}>
          Checkout
        </UiButton>
        <UiText style={styles.checkoutPrice}>Price: ${totalPrice}</UiText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    position: 'relative',
  },
  screen: {
    position: 'relative',
  },
  list: {
    paddingHorizontal: 15,
    transform: [{ translateY: 100 }],
  },
  checkout: {
    position: 'absolute',
    bottom: 10,
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 10,
    borderRadius: 10,
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
  },
  checkoutText: {
    fontFamily: 'Nunito-Bold',
    color: COLORS.white,
    fontSize: 16,
  },
  checkoutPrice: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    fontFamily: 'Nunito-Bold',
    fontSize: 17,
    textAlign: 'center',
  },
});

export default Cart;
