import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import COLORS from '../../constants/COLORS';

const UiView = ({ children, style }) => {
  return (
    <View style={{ ...Styles.screen }}>
      <ScrollView style={{ ...Styles.container, ...style }}>
        {children}
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  screen: {
    backgroundColor: COLORS.bgColor,
    position: 'relative',
    flex: 1,
  },
  container: {
    width: '100%',
  },
});

export default UiView;
