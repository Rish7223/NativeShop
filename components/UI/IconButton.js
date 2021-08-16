import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

const UiIconButton = ({ children, style, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{ ...Styles.button, ...style }}
      android_ripple={{ color: '#ffffff55' }}
    >
      {children}
    </Pressable>
  );
};

const Styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});

export default UiIconButton;
