import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 40,
    fontSize: 16,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1.5,
    borderColor: '#2069b2',
    paddingLeft: 40,
    backgroundColor: 'rgba(178, 178, 178, 0.2)',
    color: 'gray',
  },
  inputPassword: {
    width: 300,
    height: 40,
    fontSize: 16,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1.5,
    borderColor: '#2069b2',
    paddingLeft: 40,
    backgroundColor: 'rgba(178, 178, 178, 0.2)',
    color: 'gray',
  },
  inputIcon: {
    position: 'absolute',
    top: 5,
    left: 12,
    color: '#2069b2',
  },
  inputIconRight: {
    position: 'absolute',
    top: 1.5,
    right: 0,
    color: '#fff',
    backgroundColor: '#2069b2',
    borderRadius: 0,
    justifyContent: 'center',
  },
});

export default styles;
