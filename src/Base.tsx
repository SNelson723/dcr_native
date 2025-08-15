import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContents from './components/DrawerContents';
import HomeScreen from './screens/home/HomeScreen';
import BasicComponents from './screens/basicComponents/BasicComponents';

const Drawer = createDrawerNavigator();
const Base = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        backBehavior="history"
        drawerContent={drawerProps => <DrawerContents {...drawerProps} />}
        screenOptions={{
          drawerStyle: {
            backgroundColor: 'white',
            width: 240,
          },
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Components" component={BasicComponents} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Base;
