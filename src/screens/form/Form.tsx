import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { setName, setEmail } from '../../features/formSlice';
import * as Colors from '../../styles/colors';
import { getForms, postForm } from '../../api/formApi';

// See about hooking this up to your postgres database for backend practice
const FormScreen = () => {
  const context = useAppSelector(state => state.app);
  const formState = useAppSelector(state => state.form);
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted:', formState);
    postForm(context.url, formState.name, formState.email)
      .then(resp => {
        const j = resp.data;
        console.log('Form submission response:', j);
      })
      .catch(err => {
        console.error('Error submitting form:', err);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Form Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={formState.name}
        onChangeText={text => dispatch(setName(text))}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={formState.email}
        onChangeText={text => dispatch(setEmail(text))}
      />
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.theme.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '500',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default FormScreen;
