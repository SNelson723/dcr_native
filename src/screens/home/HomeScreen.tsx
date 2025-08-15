import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Colors from '../../styles/colors';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.theme.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
