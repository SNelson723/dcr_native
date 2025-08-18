import { StyleSheet } from 'react-native';
import * as Colors from '../../styles/colors';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.theme.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '500',
  },
  container: {
    flex: 1,
    padding: 20,
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
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  rowCol: {
    width: '33%',
  },
  colEmail: {
    width: '50%',
    fontSize: 16,
    color: 'black',
  },
  colId: {
    width: '10%',
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  colName: {
    fontSize: 16,
    color: 'black',
    width: '30%',
    paddingLeft: 5,
  },
  scrollHeader: {
    flexDirection: 'row',
    paddingTop: 10,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
});
