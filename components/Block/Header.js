import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import COLORS from '../../constants/COLORS';
import { StyleSheet, View } from 'react-native';
import UiIconButton from '../UI/IconButton';

const UiHeader = ({ navigation, onPress, isFav }) => {
  return (
    <View style={Styles.header}>
      <View style={Styles.leftContent}>
        <UiIconButton onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={25} color={COLORS.primaryColor} />
        </UiIconButton>
        {/* <UiText style={Styles.heading}>{title}</UiText> */}
      </View>
      <View>
        <UiIconButton onPress={onPress}>
          <AntDesign
            name={isFav ? 'heart' : 'hearto'}
            size={25}
            color={isFav ? COLORS.red : COLORS.black}
          />
        </UiIconButton>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
    top: 30,
    zIndex: 10,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  heading: {
    fontSize: 18,
    fontFamily: 'Nunito-SemiBold',
    color: COLORS.primaryColor,
    marginLeft: 20,
  },
});
export default UiHeader;
