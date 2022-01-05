import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Route from './src/navigation/main';
import FlashMessage from "react-native-flash-message";
import Loading from './src/components/Loading';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <FlashMessage position="top" />
      <Provider store={store} >
        <Route />
      </Provider>
    </SafeAreaProvider>
  )
}

export default App;