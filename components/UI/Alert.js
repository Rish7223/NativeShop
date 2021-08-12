import React from 'react';
import { StyleSheet, View } from 'react-native';
import COLORS from '../../constants/COLORS';
import UiText from './Text';
import { useSelector } from 'react-redux';

const UiAlert = () => {
  const alert = useSelector((state) => state.alert);
  if (alert.message === '') {
    return null;
  }
  return (
    <View style={Styles.alert}>
      <UiText style={Styles.alertText}>{alert.message}</UiText>
    </View>
  );
};

const Styles = StyleSheet.create({
  alert: {
    position: 'absolute',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    backgroundColor: COLORS.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 10,
    alignSelf: 'center',
    elevation: 2,
  },
  alertText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 15,
    color: COLORS.white,
  },
});

export default UiAlert;
