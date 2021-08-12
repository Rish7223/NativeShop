import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import COLORS from '../../constants/COLORS';
import { getTag } from '../../utilities/tag';
import UiIconButton from '../UI/IconButton';
import UiText from '../UI/Text';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/actions/cartActions';

const ProductCardBlock = ({ data }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <View style={Styles.container}>
      <View style={Styles.imageSec}>
        <ImageBackground
          source={{
            uri: data.image,
          }}
          resizeMode="center"
          style={Styles.productImage}
        />
      </View>
      <View style={Styles.infoSec}>
        <UiIconButton
          style={Styles.addToBag}
          onPress={() => {
            const isAlready = cartItems.find((item) => item.id === data.id);
            addItemToCart(data.id, dispatch, isAlready);
          }}
        >
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
    marginHorizontal: 15,
  },
  imageSec: {
    width: '100%',
    maxHeight: 170,
    height: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    padding: 15,
    backgroundColor: COLORS.bgColor,
  },

  productImage: {
    height: '100%',
    width: '100%',
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
