import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnPrimary: {
    backgroundColor: '#2069b2',
    borderRadius: 0,
    marginVertical: 5,
  },
  btnGoogle: {
    backgroundColor: '#DB4437',
    borderRadius: 0,
    marginVertical: 5
  },
  btnFacebook: {
    backgroundColor: '#3b5998',
    borderRadius: 0,
    marginVertical: 5
  },
  logo: {
    width: 250,
    height: 200,
    marginBottom: 15,
  },
});

export default styles;
