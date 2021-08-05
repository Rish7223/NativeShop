import React from 'react';
import { StyleSheet, View } from 'react-native';
import UiText from '../components/UI/Text';

const Profile = () => {
  return (
    <View style={styles.screen}>
      <UiText>User Profile Page!</UiText>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Profile;
