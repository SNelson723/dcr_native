import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './src/store';
import Base from './src/Base';
import { LogBox } from 'react-native';

// Ignores the legacy architecture warning
LogBox.ignoreLogs([
  'The app is running using the Legacy Architecture. The Legacy Architecture is deprecated and will be removed in a future version of React Native.',
]);

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Base />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
