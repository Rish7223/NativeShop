import React from 'react';
import { StyleSheet, View } from 'react-native';
import UiText from '../components/UI/Text';

const ProductDetail = () => {
  return (
    <View style={styles.screen}>
      <UiText>Product Detail Page!</UiText>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProductDetail;
