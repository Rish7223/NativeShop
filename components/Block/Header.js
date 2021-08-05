import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import COLORS from '../../constants/COLORS';
import { StyleSheet, View } from 'react-native';
import UiText from '../UI/Text';

const UiHeader = ({ navigation, title = 'Products' }) => {
  return (
    <View style={Styles.header}>
      <View style={Styles.leftContent}>
        <AntDesign name="arrowleft" size={25} color={COLORS.primaryColor} />
        <UiText style={Styles.heading}>{title}</UiText>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  header: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
    top: 40,
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
