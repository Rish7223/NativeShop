import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import COLORS from '../../constants/COLORS';
import { getTag } from '../../utilities/tag';
import UiIconButton from '../UI/IconButton';
import UiText from '../UI/Text';
import { MaterialIcons } from '@expo/vector-icons';

const ProductCardBlock = ({ data }) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.imageSec}>
        <Image
          source={{
            uri: data.image,
          }}
          style={Styles.productImage}
        />
      </View>
      <View style={Styles.infoSec}>
        <UiIconButton style={Styles.addToBag}>
          <MaterialIcons name="shopping-bag" size={23} color="white" />
        </UiIconButton>
        <UiText style={Styles.title}>{data.title}</UiText>
        <View style={Styles.subInfo}>
          <UiText style={Styles.tag}>{getTag(data.category)}</UiText>
          <UiText style={Styles.price}>${data.price}</UiText>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    height: 270,
    maxHeight: 270,
    minWidth: 230,
    maxWidth: 230,
    backgroundColor: COLORS.lightGrayColor,
    position: 'relative',
    padding: 10,
    marginRight: 20,
  },
  imageSec: {
    width: '100%',
    maxHeight: 170,
    height: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.bgColor,
  },

  productImage: {
    height: '90%',
    width: '55%',
  },

  infoSec: {
    paddingTop: 30,
    paddingHorizontal: 10,
    position: 'relative',
  },
  title: {
    fontFamily: 'Nunito-Bold',
    fontSize: 15,
  },

  subInfo: {
    marginTop: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  tag: {
    fontSize: 14,
    color: COLORS.textColorLight,
    fontFamily: 'Nunito-SemiBold',
  },
  price: {
    fontSize: 18,
    fontFamily: 'Nunito-Bold',
    color: COLORS.black,
  },

  addToBag: {
    position: 'absolute',
    right: 20,
    top: -20,
    height: 40,
    width: 40,
    backgroundColor: COLORS.primaryColor,
    borderRadius: 20,
    elevation: 5,
  },
});

export default ProductCardBlock;
