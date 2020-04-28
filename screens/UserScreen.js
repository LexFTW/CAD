import * as React from 'react';
import { Text, SafeAreaView, Alert, View  } from 'react-native';
import  base  from '../constants/styles/Styles';
import { IconButton, Colors, Divider, Avatar } from 'react-native-paper';
import NavigationTop from './../components/NavigationTop';
import Resources from './../config/resources/resources';
import firebase from '../config/firebase';
import { TabView, SceneMap } from 'react-native-tab-view';

const [index, setIndex] = React.useState(0);
const [routes] = React.useState([
  { key: 'first', title: 'First' },
  { key: 'second', title: 'Second' },
]);

const initialLayout = { width: Dimensions.get('window').width };

const ProfileRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const MedicationRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const renderScene = SceneMap({
  profile: ProfileRoute,
  medication: MedicationRoute
});

export default class UserScreen extends React.Component {
  onSignOut(){
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.navigation.navigate('Login');
      })
      .catch(error => {
        Alert.alert(error);
      });
  }
  
  render(){
    return (
      <SafeAreaView>
        <View style={{backgroundColor: '#2069b2', alignSelf: 'stretch', textAlign: 'center', height: 325}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 15, marginTop: 25,}}>
            <IconButton
            icon="settings"
            color={'#2069b2'}
            size={20}
            />
            <View style={{justifyContent:'center', alignItems: 'center', marginTop: 15}}>
              <Avatar.Text size={125} style={{borderWidth: 2, borderColor: 'white', padding: 5}} label="AM" labelStyle={{padding: 10, fontSize: 45}} />
              <Text style={{color: 'white', fontSize: 22, marginTop: 10}}>Alexis Mengual</Text>
              <Text style={{color: 'white', fontSize: 14, fontStyle: 'italic'}}>Diabetes Tipo 1</Text>
            </View>
            <IconButton
            icon="logout"
            color={Colors.white}
            size={20}
            onPress={() => this.onSignOut()}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', padding: 15, marginTop: 25,}}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
          />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

/*<Text style={{textAlign: 'center', color: 'white', fontSize: 16}}>{Resources.PROFILE_SETTINGS_PROFILE}</Text>
            <Text style={{textAlign: 'center', color: 'white', fontSize: 16}}>{Resources.PROFILE_SETTINGS_MEDICATION}</Text>*/