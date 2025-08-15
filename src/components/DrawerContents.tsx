import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useAppSelector } from '../hooks';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const DrawerContents = ({ navigation }: any) => {
  const menuItems = useAppSelector(state => state.app.menuItems);
  const insets = useSafeAreaInsets();

  const handleNavigation = (record: string, home: string) => {
    navigation.navigate(record, {
      screen: home,
      params: {},
    });
  };

  return (
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
        <Text>Drawer Contents</Text>
      </View>
      <View>
        {menuItems.map(item => (
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
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  // containerSettings: {
  //   paddingTop: insets.top,
  //   paddingBottom: insets.bottom,
  //   paddingLeft: insets.left,
  //   paddingRight: insets.right,
  //   margin: 0,
  // },
  headerContainer: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderTopRightRadius: 15,
  },
  menuItem: {
    padding: 16,
  },
  menuText: {
    fontSize: 16,
  },
  pressed: {
    backgroundColor: '#eee',
  },
});

export default DrawerContents;
