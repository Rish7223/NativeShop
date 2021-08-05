import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigation from './Navigator';
import { Provider } from 'react-redux';
import store from './store';

// custom fonts
const fontsData = {
  Nunito: require('./assets/font/Nunito-Regular.ttf'),
  'Nunito-light': require('./assets/font/Nunito-Light.ttf'),
  'Nunito-SemiBold': require('./assets/font/Nunito-SemiBold.ttf'),
  'Nunito-Bold': require('./assets/font/Nunito-Bold.ttf'),
};

export default function App() {
  const [loaded] = useFonts(fontsData);

  if (!loaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
