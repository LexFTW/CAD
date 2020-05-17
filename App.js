import * as React from 'react';
import firebase from './config/firebase';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainNavigator from './navigation/MainNavigator';
import useLinking from './navigation/useLinking';

const Stack = createStackNavigator();

export default function App(props) {

  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const isAuthentication = React.useState(false);
  const { getInitialState } = useLinking(containerRef);

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();
        setInitialNavigationState(await getInitialState());
        loadFonts();
      } catch (e) {
        console.log(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
          >
            <Stack.Screen name="Root" component={MainNavigator} />
            <Stack.Screen name="SingUp" component={MainNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

async function loadFonts(){
  await Font.loadAsync({
    ...Ionicons.font,
    'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
