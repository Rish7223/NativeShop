import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ImageBackground, Pressable } from 'react-native';
import COLORS from '../../constants/COLORS';
import UiIconButton from '../UI/IconButton';
import UiText from '../UI/Text';
import { AntDesign, Feather } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart } from '../../store/actions/cartActions';

const CartProductCard = ({ productData, navigation }) => {
  const { image, title, price, id } = productData;
  const [quantity, setQuantity] = useState(1);
  const [productPrice, setProductPrice] = useState(price);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    setProductPrice(price * quantity);
  }, [quantity]);

  const handleIncreaseQuantity = () => {
    if (quantity < 6) {
      setQuantity(quantity + 1);
    }
  };
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={Styles.container}>
      <Pressable
        style={Styles.imageView}
        onPress={() => {
          navigation.navigate('CartProductDetail', {
            productData: productData,
          });
        }}
      >
        <ImageBackground
          source={{ uri: image }}
          resizeMode="center"
          style={Styles.productImage}
        />
      </Pressable>
      <View style={Styles.contentView}>
        <View style={Styles.info}>
          <UiText style={Styles.title}>{title}</UiText>
          <UiText style={Styles.priceText}>${productPrice}</UiText>
        </View>
        <View style={Styles.actionBox}>
          <View style={Styles.actions}>
            <UiIconButton
              style={Styles.actionBtnMinus}
              onPress={handleDecreaseQuantity}
            >
              <AntDesign name="minus" size={16} color={COLORS.textColorLight} />
            </UiIconButton>
            <UiText style={Styles.quantityText}>{quantity}</UiText>
            <UiIconButton
              style={Styles.actionBtn}
              onPress={handleIncreaseQuantity}
            >
              <AntDesign name="plus" size={14} color={COLORS.white} />
            </UiIconButton>
          </View>
          <UiIconButton
            style={Styles.deleteItemBtn}
            onPress={() => {
              removeItemFromCart(dispatch, id, cartItems);
            }}
          >
            <Feather name="trash" color={COLORS.red} size={16} />
          </UiIconButton>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.lightGrayColor,
    borderRadius: 10,
    paddingVertical: 10,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  imageView: {
    width: 80,
    height: 80,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 15,
    backgroundColor: COLORS.bgColor,
  },
  productImage: {
    height: '100%',
    width: '100%',
  },
  contentView: {
    flex: 1,
    paddingHorizontal: 10,
  },

  title: {
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    color: COLORS.primaryColor,
  },
  size: {
    fontFamily: 'Nunito-Bold',
    fontSize: 14,
    color: COLORS.textColorLight,
  },

  actionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  priceText: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 14,
    color: COLORS.blue,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 18,
    color: COLORS.primaryColor,
    marginHorizontal: 10,
  },
  actionBtnMinus: {
    height: 25,
    width: 25,
    borderWidth: 1.5,
    borderColor: COLORS.textColorLight,
    borderRadius: 5,
  },
  actionBtn: {
    backgroundColor: COLORS.primaryColor,
    height: 28,
    width: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  deleteItemBtn: {
    borderWidth: 1,
    borderColor: COLORS.textColorLight,
    padding: 7,
    borderRadius: 50,
  },
});

export default CartProductCard;
