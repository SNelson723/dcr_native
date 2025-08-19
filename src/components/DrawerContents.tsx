import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useAppSelector, useAppDispatch } from '../hooks';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { setToken, setLoggedIn } from '../features/appSlice';
import * as Colors from '../styles/colors';

const DrawerContents = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  const context = useAppSelector(state => state.app);
  const insets = useSafeAreaInsets();

  const handleNavigation = (record: string, home: string) => {
    navigation.navigate(record, {
      screen: home,
      params: {},
    });
  };

  const handleLogout = () => {
    // Clear user data and navigate to login screen
    dispatch(setToken(''));
    dispatch(setLoggedIn(false));
    navigation.navigate('Login');
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        contentContainerStyle={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          margin: 0,
        }}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Drawer Contents</Text>
        </View>
        {context.menuItems.map(item => (
          <Pressable
            key={item.id}
            onPress={() => handleNavigation(item.href, item.module)}
            style={({ pressed }) => [
              styles.menuItem,
              pressed && styles.pressed,
            ]}
          >
            <Text style={styles.menuText}>{item.label}</Text>
          </Pressable>
        ))}
      </DrawerContentScrollView>
      <Pressable
        style={{ paddingHorizontal: 20, height: 40 }}
        onPress={handleLogout}
      >
        <Text style={styles.menuText}>Logout</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderTopRightRadius: 15,
    borderBottomWidth: 2,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.theme.primary,
  },
  menuItem: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  menuText: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
  },
  pressed: {
    backgroundColor: '#eee',
  },
});

export default DrawerContents;
