import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import COLORS from '../../constants/COLORS';
import UiText from '../UI/Text';

const OfferBlock = () => {
  return (
    <View style={styles.offerBox}>
      <LinearGradient
        colors={[COLORS.pink, COLORS.pinkLight]}
        start={{ x: 0.9, y: 0.3 }}
        style={styles.offer}
      >
        <UiText style={styles.offerText}>Get 10% off</UiText>
        <UiText style={styles.offerCodeText}>
          Use code RISH10 at checkout.
        </UiText>
        <Image
          source={require('../../assets/icons/Giftbox.png')}
          style={styles.giftBox}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  offerBox: {
    marginHorizontal: 15,
    overflow: 'hidden',
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
  offer: {
    paddingHorizontal: 15,
    height: 70,
    alignItems: 'flex-end',
    justifyContent: 'center',
    position: 'relative',
  },
  offerText: {
    color: COLORS.white,
    fontFamily: 'Nunito-Bold',
    fontSize: 20,
  },
  offerCodeText: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 15,
    color: COLORS.white,
  },
  giftBox: {
    position: 'absolute',
    maxHeight: 80,
    maxWidth: 80,
    left: 0,
  },
});

export default OfferBlock;
