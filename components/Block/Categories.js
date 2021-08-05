import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { CATEGORIES } from '../../dummy_data/products';
import UiButton from '../UI/Button';

const CategoriesBlock = () => {
  return (
    <View style={Styles.content}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style
      >
        {CATEGORIES.map((data) => (
          <UiButton
            style={{ backgroundColor: data.color, ...Styles.button }}
            key={data.id}
            textStyle={Styles.btnText}
          >
            {data.name}
          </UiButton>
        ))}
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  content: {
    marginVertical: 20,
  },
  button: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 15,
  },
  btnText: {
    fontSize: 17,
  },
});

export default CategoriesBlock;
