import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import PaymentCardBlock from '../components/Block/PaymentCard';
import PaymentHeaderBlock from '../components/Block/PaymentHeader';
import PaymentMethodsBlock from '../components/Block/PaymentMethods';
import PromocodeInputBlock from '../components/Block/PromocodeInput';
import UiIconButton from '../components/UI/IconButton';
import UiText from '../components/UI/Text';
import COLORS from '../constants/COLORS';

const Payment = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <PaymentHeaderBlock navigation={navigation} />
      <ScrollView style={Styles.content}>
        <PaymentCardBlock />
        <View style={Styles.paymentMethods}>
          <UiText style={Styles.headText}>Choose Payment Methods</UiText>
          <PaymentMethodsBlock />
        </View>
        <View style={Styles.promo}>
          <UiText style={Styles.headText}>Promo Code</UiText>
          <PromocodeInputBlock />
        </View>
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColor,
  },
  content: {
    transform: [{ translateY: 100 }],
    paddingHorizontal: 15,
  },
  paymentMethods: {
    marginTop: 25,
  },
  headText: {
    fontSize: 18,
    fontFamily: 'Nunito-SemiBold',
  },
  promo: {
    marginTop: 15,
  },
});
export default Payment;
