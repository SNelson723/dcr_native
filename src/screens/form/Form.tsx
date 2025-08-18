import React from 'react';
import { styles } from '.';
import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../hooks';
import {
  setName,
  setEmail,
  setRows,
  resetRows,
} from '../../features/formSlice';
import { getForms, postForm } from '../../api/formApi';

// See about hooking this up to your postgres database for backend practice
const FormScreen = () => {
  const context = useAppSelector(state => state.app);
  const formState = useAppSelector(state => state.form);
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    postForm(context.url, formState.name, formState.email)
      .then(resp => {
        const j = resp.data;
        handleFetch(); // Refresh the rows after submission
        dispatch(setName(''));
        dispatch(setEmail(''));
      })
      .catch(err => {
        console.error('Error submitting form:', err);
      });
  };

  const handleFetch = () => {
    getForms(context.url)
      .then(resp => {
        const j = resp.data;
        if (j.error === 0) {
          dispatch(setRows(j.forms));
        }
      })
      .catch(err => {
        console.error('Error fetching forms:', err);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={formState.name}
        onChangeText={text => dispatch(setName(text))}
      />
      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={formState.email}
        onChangeText={text => dispatch(setEmail(text))}
      />
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
      <Pressable
        style={[styles.button, { backgroundColor: 'purple' }]}
        onPress={handleFetch}
      >
        <Text style={styles.buttonText}>Get all Rows</Text>
      </Pressable>
      <Pressable
        style={[styles.button, { backgroundColor: 'limegreen' }]}
        onPress={() => dispatch(resetRows())}
      >
        <Text style={styles.buttonText}>Reset Rows</Text>
      </Pressable>
      <View style={styles.scrollHeader}>
        <Text style={styles.colId}>ID</Text>
        <Text style={styles.colName}>Name</Text>
        <Text style={styles.colEmail}>Email</Text>
      </View>
      <ScrollView>
        {formState.rows.map((row, i) => (
          <View
            key={row.id}
            style={[
              styles.row,
              { backgroundColor: i % 2 === 0 ? 'white' : 'lightgray' },
            ]}
          >
            <Text style={styles.colId}>{row.id}</Text>
            <Text style={styles.colName}>{row.name}</Text>
            <Text style={styles.colEmail}>{row.email}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: Colors.theme.primary,
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   buttonText: {
//     fontSize: 20,
//     color: 'white',
//     fontWeight: '500',
//   },
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     height: 40,
//     borderColor: 'black',
//     borderRadius: 5,
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   row: {
//     flexDirection: 'row',
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   rowCol: {
//     width: '33%',
//   },
//   colEmail: {
//     width: '50%',
//     fontSize: 16,
//     color: 'black',
//   },
//   colId: {
//     width: '10%',
//     fontSize: 16,
//     color: 'black',
//     textAlign: 'center',
//   },
//   colName: {
//     fontSize: 16,
//     color: 'black',
//     width: '30%',
//     paddingLeft: 5,
//   },
//   scrollHeader: {
//     flexDirection: 'row',
//     paddingVertical: 10,
//   },
// });

export default FormScreen;
