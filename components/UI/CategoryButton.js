import React from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';
import COLORS from '../../constants/COLORS';
import UiText from './Text';

const UiCategoryButton = ({ data, style, onPress, textStyle }) => {
  const ProductIcon = ({ name }) => {
    switch (name) {
      case `men's clothing`:
        return (
          <Image
            source={require('../../assets/icons/womans-clothes.png')}
            style={Styles.icons}
          />
        );
      case `women's clothing`:
        return (
          <Image
            source={require('../../assets/icons/mans-clothe.png')}
            style={{ ...Styles.icons, height: 16, width: 16 }}
          />
        );
      case 'electronics':
        return (
          <Image
            source={require('../../assets/icons/computer.png')}
            style={Styles.icons}
          />
        );
      default:
        return (
          <Image
            source={require('../../assets/icons/ring.png')}
            style={Styles.icons}
          />
        );
    }
  };
  return (
    <Pressable onPress={onPress} style={{ ...Styles.button, ...style }}>
      <ProductIcon name={data.name} />
      <UiText style={{ ...Styles.text, ...textStyle }}>{data.name}</UiText>
    </Pressable>
  );
};

const Styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: COLORS.primaryColor,
    fontFamily: 'Nunito-SemiBold',
    marginLeft: 20,
  },
  icons: {
    height: 20,
    width: 20,
  },
});

export default UiCategoryButton;
