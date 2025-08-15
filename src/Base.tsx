import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/home/HomeScreen';

const Drawer = createDrawerNavigator();
const Base = (props: any) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" backBehavior="history">
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Base;
