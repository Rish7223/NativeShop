import React from 'react';
import { StyleSheet, Text } from 'react-native';

const UiText = ({ children, style }) => {
  return <Text style={{ ...Styles.text, ...style }}>{children}</Text>;
};

const Styles = StyleSheet.create({
  text: {
    fontFamily: 'Nunito',
  },
});

export default UiText;
