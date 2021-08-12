import React from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import COLORS from '../../constants/COLORS';
import UiButton from '../UI/Button';
import UiText from '../UI/Text';
import ProductCardBlock from './ProductCard';

const HorizontalProductView = ({ data, headTitle, navigation }) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.head}>
        <UiText style={Styles.heading}>{headTitle}</UiText>
        <UiButton
          textStyle={Styles.heading}
          onPress={() => {
            console.log('See All Clicked');
          }}
        >
          See All
        </UiButton>
      </View>
      <ScrollView
        style={Styles.dataSec}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {data.map((product) => (
          <Pressable
            key={product.id}
            onPress={() =>
              navigation.navigate('ProductDetail', {
                productData: product,
              })
            }
          >
            <ProductCardBlock data={product} />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 10,
  },
  head: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 16,
    fontFamily: 'Nunito-Bold',
    color: COLORS.primaryColor,
  },
  dataSec: {
    marginTop: 20,
  },
});

export default HorizontalProductView;
