import React from 'react';
import { StyleSheet } from 'react-native';
import UiText from '../components/UI/Text';
import UiView from '../components/UI/View';

const Category = ({ navigation }) => {
  return (
    <UiView style={Styles.screen}>
      <UiText>Category screen</UiText>
    </UiView>
  );
};

const Styles = StyleSheet.create({
  screen: {
    position: 'relative',
  },
});

export default Category;
