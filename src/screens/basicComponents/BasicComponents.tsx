import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { setText } from '../../features/basicCompSlice';

/**
 * for TextInputs
 * keyboardType: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'ascii-capable' |
 * 'numbers-and-punctuation' | 'url' | 'number-pad' | 'name-phone-pad' | 'decimal-pad' | 'twitter' | 'web-search'
 * autoCapitalize: 'none' | 'sentences' | 'words' | 'characters'
 * secureTextEntry: boolean (for password fields)
 *
 * returnKeyType: 'done' | 'go' | 'next' | 'search' | 'send' | 'previous' | 'default'
 */

const BasicComponents: React.FC = () => {
  const basicCompState = useAppSelector(state => state.basicComp);
  const dispatch = useAppDispatch();

  const handleTextChange = (text: string) => {
    dispatch(setText(text));
  };

  // Better to set the ScrollView as the main container if you want to scroll the entire screen
  return (
    <ScrollView
      style={styles.scroll}
      onScroll={() => console.log('Scrolling...')}
      // horizontal={true}
      // showsHorizontalScrollIndicator={false}
      // showsVerticalScrollIndicator={false}
      // For the content inside the ScrollView
      // contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
      >
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={basicCompState.text}
          onChangeText={handleTextChange}
          secureTextEntry={false} // this is used for password fields
        />
        <Image source={require('./cake.png')} style={styles.image} />
        <Image source={require('./cake.png')} style={styles.image} />
        <Image source={require('./cake.png')} style={styles.image} />
        <Image source={require('./cake.png')} style={styles.image} />
        <Image source={require('./cake.png')} style={styles.image} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: '70%',
  },
  scroll: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default BasicComponents;
