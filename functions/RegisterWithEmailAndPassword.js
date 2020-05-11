import { Alert } from 'react-native';

import firebase from '../config/firebase';

export async function signUpWithEmailAndPassword(state, props) {
  if (state.userName === '' || state.email === '' || state.password === '' || state.confPassword === '') {
    Alert.alert('Hay campos vacios, por favor rellenelos todos.');
  } else if (state.password !== state.confPassword) {
    Alert.alert('Asegurate de confirmar correctamente la contraseña.');
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
