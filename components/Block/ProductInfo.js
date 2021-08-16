import React from 'react';
import { StyleSheet, View } from 'react-native';
import COLORS from '../../constants/COLORS';
import { getTag } from '../../utilities/tag';
import UiButton from '../UI/Button';
import UiText from '../UI/Text';

const sizes = ['sm', 'md', 'lg', 'xl', 'xxl'];

const ProductInfoBlock = ({ data }) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.productInfo}>
        <View style={Styles.productText}>
          <UiText style={Styles.title}>{data.title}</UiText>
          <UiText style={Styles.tag}>{getTag(data.category)}</UiText>
        </View>
        <UiText style={Styles.price}>${data.price}</UiText>
      </View>
      {data.category !== 'electronics' && (
        <View style={Styles.size}>
          <UiText style={Styles.head}>Size</UiText>
          <View style={Styles.sizes}>
            {sizes.map((data) => (
              <UiButton
                style={Styles.sizeBar}
                key={data}
                textStyle={Styles.sizeBarText}
              >
                {data}
              </UiButton>
            ))}
          </View>
        </View>
      )}
      <View style={Styles.description}>
        <UiText style={Styles.head}>Description</UiText>
        <UiText style={Styles.descriptionText}>{data.description}</UiText>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {},
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 18,
    fontFamily: 'Nunito-Bold',
    color: COLORS.primaryColor,
  },

  tag: {
    marginTop: 0,
    fontSize: 15,
    fontFamily: 'Nunito-SemiBold',
    color: COLORS.textColorLight,
  },

  price: {
    fontSize: 24,
    fontFamily: 'Nunito-Bold',
    color: COLORS.primaryColor,
    transform: [{ translateY: 15 }, { translateX: -3 }],
  },
  size: {
    marginTop: 20,
  },
  sizes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sizeBar: {
    marginTop: 10,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: COLORS.textColorLight,
    borderRadius: 10,
  },
  sizeBarText: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 17,
  },
  description: {
    marginVertical: 20,
  },
  head: {
    fontSize: 17,
    fontFamily: 'Nunito-Bold',
    color: COLORS.primaryColor,
  },
  descriptionText: {
    marginTop: 10,
    fontSize: 15,
    fontFamily: 'Nunito-SemiBold',
    color: COLORS.textColorLight,
    letterSpacing: 0.2,
  },
});

export default ProductInfoBlock;
