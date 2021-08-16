import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ImageBackground, Pressable } from 'react-native';
import COLORS from '../../constants/COLORS';
import UiIconButton from '../UI/IconButton';
import UiText from '../UI/Text';
import { AntDesign } from '@expo/vector-icons';

const CartProductCard = ({ productData, navigation }) => {
  const { image, title, size, category, price } = productData;
  const [quantity, setQuantity] = useState(1);
  const [productPrice, setProductPrice] = useState(price);

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
          <UiText style={Styles.size}>Size: M</UiText>
        </View>
        <View style={Styles.price}>
          <UiText style={Styles.priceText}>${productPrice}</UiText>
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
              <AntDesign name="plus" size={16} color={COLORS.white} />
            </UiIconButton>
          </View>
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
    paddingVertical: 5,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  imageView: {
    width: 80,
    height: 80,
    borderRadius: 20,
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

  price: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  priceText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    color: COLORS.primaryColor,
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
    height: 28,
    width: 28,
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
});

export default CartProductCard;
