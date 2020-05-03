import React, {Component} from 'react';

import { ScrollView, Text, TextInput, SafeAreaView, Alert, View, Button } from 'react-native';
import { IconButton, Colors, Divider, Avatar } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import NavigationTop from './../components/NavigationTop';

import TabView from '../components/UserTabView';

import  base  from '../constants/styles/Styles';
import  styles  from '../constants/styles/UserStyles';

import Resources from './../config/resources/resources';

import firebase from '../config/firebase';
import 'firebase/firestore';

const firestore = firebase.firestore();

export default class UserScreen extends Component {

  constructor(props){
    super(props);
    this.state = ({
      interval_min: "",
      interval_max: "",
      hc_brekfast: "",
      hc_food: "",
      hc_snack: "",
      hc_dinner: "",
      insulin_brekfast: "",
      insulin_food: "",
      insulin_snack: "",
      insulin_dinner: "",
      range_over_hc: "",
      range_under_hc: "",
      range_over_insulin: "",
      range_under_insulin: ""
    });
  }

  async componentDidMount(){
    const user = firebase.auth().currentUser;

    await firestore
    .collection('userParametersMedication')
    .doc(user.uid)
    .get()
    .then(doc => {
      if (!doc.exists) {
        Alert.alert('No such document!');
      } else {
        this.setState({interval_max: doc.data().GlucoseIntervalMax});
        this.setState({interval_min: doc.data().GlucoseIntervalMin});
        this.setState({hc_brekfast: doc.data().HCBaseBrekfast});
        this.setState({hc_food: doc.data().HCBaseFood});
        this.setState({hc_snack: doc.data().HCBaseSnack});
        this.setState({hc_dinner: doc.data().HCBaseDinner});
        this.setState({insulin_brekfast: doc.data().InsulinBaseBrekfast});
        this.setState({insulin_food: doc.data().InsulinBaseFood});
        this.setState({insulin_snack: doc.data().InsulinBaseSnack});
        this.setState({insulin_dinner: doc.data().InsulinBaseDinner});
        this.setState({range_over_hc: doc.data().RangeHCHypers});
        this.setState({range_under_hc: doc.data().RangeHCHipos});
        this.setState({range_over_insulin: doc.data().RangeInsulinHypers});
        this.setState({range_under_insulin: doc.data().RangeInsulinHipos});
      }
    })
  }

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

  async saveChangesInFirestore(){
    const user = firebase.auth().currentUser;
    const doc = firestore.collection('userParametersMedication').doc(user.uid);

    await doc.set({
      GlucoseIntervalMax: this.state.interval_max,
      GlucoseIntervalMin: this.state.interval_min,
      HCBaseBrekfast: this.state.hc_brekfast,
      HCBaseDinner: this.state.hc_dinner,
      HCBaseFood: this.state.hc_food,
      HCBaseSnack: this.state.hc_snack,
      InsulinBaseBrekfast: this.state.insulin_brekfast,
      InsulinBaseDinner: this.state.insulin_dinner,
      InsulinBaseFood: this.state.insulin_food,
      InsulinBaseSnack: this.state.insulin_snack,
      RangeHCHipos: this.state.range_under_hc,
      RangeHCHypers: this.state.range_over_hc,
      RangeInsulinHipos: this.state.range_under_insulin,
      RangeInsulinHypers: this.state.range_over_insulin,
    });
  }

  render(){
    return (
      <View style={styles.containerHead}>
      <View style={styles.viewHead}>
        <IconButton
          icon="settings"
          color={"#2069b2"}
          size={20}
        />
        <View style={styles.viewAvatar}>
          <Avatar.Text size={125} style={styles.avatar} label="AM" labelStyle={{padding: 10, fontSize: 45}} />
          <Text style={styles.name}>{firebase.auth().currentUser.displayName}</Text>
          <Text style={styles.type}>{Resources.PROFILE_DIABETIS_TYPE}</Text>
        </View>
        <IconButton
          icon="logout"
          color={Colors.white}
          size={20}
          onPress={() => this.onSignOut()}
        />
      </View>
      <TabView state={this.state}/>
    </View>
    );
  } 
}