import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import COLORS from '../../constants/COLORS';
import { Image, StyleSheet, View } from 'react-native';
import UiText from '../UI/Text';
const PaymentCardBlock = () => {
  return (
    <LinearGradient
      colors={[COLORS.cardLinear2, COLORS.cardLinear1]}
      start={{ x: 0.8, y: 0.5 }}
      style={Styles.container}
    >
      <UiText style={Styles.title}>Credit Card</UiText>

      <View style={Styles.cardInfo}>
        <UiText style={Styles.cardNo}>3541 4476535 00435</UiText>
        <UiText style={Styles.cardUser}>Rishabh Tyagi</UiText>
      </View>
      <Image
        source={require('../../assets/icons/masterCard.png')}
        style={Styles.masterCard}
      />
    </LinearGradient>
  );
};

const Styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    minHeight: 150,
    borderRadius: 20,
    justifyContent: 'space-between',
    position: 'relative',
  },
  title: {
    color: COLORS.white,
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
  },
  cardNo: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 20,
    color: COLORS.white,
    marginBottom: 6,
  },
  cardUser: {
    fontFamily: 'Nunito',
    fontSize: 16,
    color: COLORS.white,
  },
  masterCard: {
    position: 'absolute',
    height: 50,
    width: 50,
    bottom: 5,
    right: 20,
  },
});

export default PaymentCardBlock;
