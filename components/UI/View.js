import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import COLORS from '../../constants/COLORS';

const UiView = ({ children, style }) => {
  return (
    <ScrollView style={{ ...Styles.screen, ...style }}>{children}</ScrollView>
  );
};

const Styles = StyleSheet.create({
  screen: {
    backgroundColor: COLORS.bgColor,
    position: 'relative',
    flex: 1,
  },
});

export default UiView;
