import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { CATEGORIES } from '../../dummy_data/products';
import UiCategoryButton from '../UI/CategoryButton';

const CategoriesBlock = () => {
  return (
    <View style={Styles.content}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style
      >
        {CATEGORIES.map((data) => (
          <UiCategoryButton
            style={{ backgroundColor: data.color, ...Styles.button }}
            key={data.id}
            data={data}
            textStyle={Styles.btnText}
          />
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
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 15,
  },
  btnText: {
    fontSize: 17,
  },
});

export default CategoriesBlock;
