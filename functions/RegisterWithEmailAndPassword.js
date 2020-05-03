import { Alert } from 'react-native';

import firebase from '../config/firebase';

export async function signUpWithEmailAndPassword(state, props) {
  if (state.userName === '' || state.email === '' || state.password === '' || state.confPassword === '') {
    Alert.alert('Por favor, rellene todos los campos.');
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
