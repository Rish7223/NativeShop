import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { CATEGORIES } from '../../dummy_data/products';
import UiCategoryButton from '../UI/CategoryButton';

const CategoriesBlock = ({ navigation }) => {
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
            onPress={() =>
              navigation.navigate('Category', {
                categoryName: data,
              })
            }
          />
        ))}
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  content: {
    marginTop: 20,
    marginBottom: 10,
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
