import React from 'react';
import { Modal, ScrollView, StyleSheet, View } from 'react-native';
import COLORS from '../../constants/COLORS';
import PaymentCardBlock from '../Block/PaymentCard';
import PaymentHeaderBlock from '../Block/PaymentHeader';
import PaymentMethodsBlock from '../Block/PaymentMethods';
import PromocodeInputBlock from '../Block/PromocodeInput';
import UiButton from '../UI/Button';
import UiText from '../UI/Text';

const PaymentModelSection = ({ isVisible, setIsVisible, totalPrice }) => {
  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={Styles.container}>
        <PaymentHeaderBlock closeModel={setIsVisible} />
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
        <View style={Styles.paymentAction}>
          <View style={Styles.paymentInfo}>
            <UiText style={Styles.headText}>Total Payment</UiText>
            <UiText style={Styles.headText}>${totalPrice}</UiText>
          </View>
          <UiButton style={Styles.paymentBtn} textStyle={Styles.paymentBtnText}>
            Payment
          </UiButton>
        </View>
      </View>
    </Modal>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColor,
  },
  content: {
    transform: [{ translateY: 70 }],
    paddingHorizontal: 15,
  },
  paymentMethods: {
    marginTop: 25,
  },
  headText: {
    fontSize: 17,
    fontFamily: 'Nunito-SemiBold',
  },
  promo: {
    marginTop: 15,
  },
  paymentAction: {
    position: 'absolute',
    width: '100%',
    paddingHorizontal: 15,
    bottom: 10,
  },
  paymentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  paymentBtn: {
    backgroundColor: COLORS.primaryColor,
    paddingVertical: 15,
    borderRadius: 15,
    marginTop: 10,
  },
  paymentBtnText: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
    color: COLORS.white,
  },
});

export default PaymentModelSection;
