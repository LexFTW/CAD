import {Alert} from 'react-native';
import firebase from '../config/firebase';

export async function signInWithEmailAndPassword(email, password, props){
  await firebase
  .auth()
  .signInWithEmailAndPassword(email, password)
  .then(props.navigation.navigate('Home'))
  .catch(error => {
    let errorCode = error.code;
    let errorMessage = error.message;
    Alert.alert(errorMessage);
  });
}
