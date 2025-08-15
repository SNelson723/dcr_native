import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './src/store';
import Base from './src/Base';


const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Base />
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
