import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import COLORS from '../../constants/COLORS';
import UiIconButton from '../UI/IconButton';

const PaymentMethodsBlock = () => {
  return (
    <View style={Styles.methods}>
      <UiIconButton style={Styles.paymentMethodBtn}>
        <ImageBackground
          source={require('../../assets/icons/masterCard.png')}
          resizeMode="center"
          style={Styles.paymentIcons}
        ></ImageBackground>
      </UiIconButton>
      <UiIconButton style={Styles.paymentMethodBtn}>
        <ImageBackground
          source={require('../../assets/icons/paypal.png')}
          resizeMode="center"
          style={Styles.paymentIcons}
        ></ImageBackground>
      </UiIconButton>
      <UiIconButton style={Styles.paymentMethodBtn}>
        <ImageBackground
          source={require('../../assets/icons/apple.png')}
          resizeMode="center"
          style={Styles.paymentIcons}
        ></ImageBackground>
      </UiIconButton>
      <UiIconButton style={Styles.paymentMethodBtn}>
        <ImageBackground
          source={require('../../assets/icons/three-dots.png')}
          resizeMode="center"
          style={Styles.paymentIcons}
        ></ImageBackground>
      </UiIconButton>
    </View>
  );
};
const Styles = StyleSheet.create({
  methods: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  paymentIcons: {
    height: '100%',
    width: '100%',
  },
  paymentMethodBtn: {
    height: 50,
    width: 70,
    position: 'relative',
    borderWidth: 2,
    borderColor: COLORS.borderGrey,
    borderRadius: 15,
  },
});

export default PaymentMethodsBlock;
