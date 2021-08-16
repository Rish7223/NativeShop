import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import COLORS from '../../constants/COLORS';
import UiText from './Text';

const UiButton = ({ children, onPress, style, textStyle }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{ ...Styles.button, ...style }}
      android_ripple={{ color: '#ffffff55' }}
    >
      <UiText style={{ ...Styles.text, ...textStyle }}>{children}</UiText>
    </Pressable>
  );
};

const Styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: COLORS.primaryColor,
    fontFamily: 'Nunito-SemiBold',
  },
});

export default UiButton;
