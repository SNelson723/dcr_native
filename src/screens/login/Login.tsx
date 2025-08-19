import React from 'react';
import { View, Text, Pressable, TextInput, StyleSheet } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  setUsername,
  setPassword,
  setToken,
  setLoggedIn,
} from '../../features/appSlice';
import { login } from '../../api/login';
import * as Colors from '../../styles/colors';

const Login = () => {
  const dispatch = useAppDispatch();
  const context = useAppSelector(state => state.app);

  const handleLogin = () => {
    login(context.url, context.username, context.password)
      .then(resp => {
        const j = resp.data;
        dispatch(setToken(j.access_token));
        dispatch(setLoggedIn(true));
      })
      .catch(error => console.log(error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Username and Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={context.username}
        onChangeText={text => dispatch(setUsername(text))}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={context.password}
        onChangeText={text => dispatch(setPassword(text))}
        secureTextEntry
      />
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: Colors.theme.primary,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Login;
