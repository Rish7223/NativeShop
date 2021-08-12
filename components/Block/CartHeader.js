import React from 'react';
import { StyleSheet, View } from 'react-native';
import UiIconButton from '../UI/IconButton';
import { AntDesign } from '@expo/vector-icons';
import UiText from '../UI/Text';
import COLORS from '../../constants/COLORS';

const CartHeaderBlock = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.leftContent}>
        <UiIconButton
          onPress={() => {
            navigation.navigate('Products');
          }}
        >
          <AntDesign name="arrowleft" size={25} color={COLORS.primaryColor} />
        </UiIconButton>
      </View>
      <View style={Styles.centerContent}>
        <UiText style={Styles.headerText}>Cart</UiText>
      </View>
      <View style={Styles.leftContent}></View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
    top: 30,
    zIndex: 30,
  },

  headerText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 20,
    color: COLORS.primaryColor,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CartHeaderBlock;
