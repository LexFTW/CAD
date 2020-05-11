import { Alert } from 'react-native';

import Resources from './../config/resources/resources';

import firebase from '../config/firebase';

export async function signUpWithEmailAndPassword(state, props) {
  if (state.userName === '' || state.email === '' || state.password === '' || state.confPassword === '') {
    Alert.alert(Resources.ERROR_REGISTER_EMPTY);
  } else if (state.password !== state.confPassword) {
    Alert.alert(Resources.ERROR_REGISTER_PASS);
  } else {
    await firebase
    .auth()
    .createUserWithEmailAndPassword(state.email, state.password)
    .then((res) => {
      res.user.updateProfile({
        displayName: state.userName
      })
      props.navigation.navigate('Home')
    })
    .catch(error => Alert.alert(error.message))
  }
}
