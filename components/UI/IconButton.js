import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

const UiIconButton = ({ children, style, onPress }) => {
  return (
    <Pressable onPress={onPress} style={{ ...Styles.button, ...style }}>
      {children}
    </Pressable>
  );
};

const Styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UiIconButton;
