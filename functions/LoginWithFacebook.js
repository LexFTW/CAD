import {Alert} from 'react-native';

import firebase from '../config/firebase';
import * as Facebook from 'expo-facebook';

export async function signInWithFacebook(props){
  try {
    await Facebook.initializeAsync('666200950884855');
    const {
      type,
      token,
      expires,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile'],
    });
    if (type === 'success') {
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      props.navigation.navigate('Home')
    }
  } catch ({ errorMessage }) {
    Alert.alert(errorMessage);
  }
}
