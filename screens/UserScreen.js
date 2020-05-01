import * as React from 'react';
import { ScrollView, Text, TextInput, SafeAreaView, Alert, View, Button  } from 'react-native';
import  base  from '../constants/styles/Styles';
import { IconButton, Colors, Divider, Avatar } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import NavigationTop from './../components/NavigationTop';
import Resources from './../config/resources/resources';
import firebase from '../config/firebase';
import 'firebase/firestore';

export default class UserScreen extends React.Component {
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
      range_under_insulin: "",
    });
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

  async onChangeState(name, value){
    await this.setState({[name] : value})
  }

  saveChangesInFirestore(){
    const user = firebase.auth().currentUser;
    const doc = firebase.firestore().collection('userParametersMedication').doc(user.uid);

    Alert.alert(this.state.interval_max)

    doc.set({
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
      <ScrollView>
        <View style={{backgroundColor: '#2069b2', alignSelf: 'stretch', textAlign: 'center', height: 325}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 15, marginTop: 25,}}>
            <IconButton
              icon="settings"
              color={"#2069b2"}
              size={20}
            />
            <View style={{justifyContent:'center', alignItems: 'center', marginTop: 15}}>
              <Avatar.Text size={125} style={{borderWidth: 2, borderColor: 'white', padding: 5}} label="AM" labelStyle={{padding: 10, fontSize: 45}} />
              <Text style={{color: 'white', fontSize: 22, marginTop: 10}}>{firebase.auth().currentUser.displayName}</Text>
              <Text style={{color: 'white', fontSize: 14, fontStyle: 'italic'}}>{Resources.PROFILE_DIABETIS_TYPE}</Text>
            </View>
            <IconButton
              icon="logout"
              color={Colors.white}
              size={20}
              onPress={() => this.onSignOut()}
            />
          </View>
        </View>
        <View style={{alignItems: "center", flex: 1, justifyContent: "center", marginVertical: 15}}>
          <View style={{borderColor: '#0069d9', borderWidth: 2, marginBottom: 10, backgroundColor: '#adccea'}}>
            <UserSettings text={Resources.MEDICATION_GLUCOSE_INTERVAL_MAX} value={this.state.interval_min} label={'interval_min'}/>
            <UserSettings lines={2} text={Resources.MEDICATION_GLUCOSE_INTERVAL_MIN} number={"1"} value={this.state.interval_max} />
          </View>
          <View style={{borderColor: '#0069d9', borderWidth: 2, marginBottom: 10, backgroundColor: '#adccea'}}>
            <UserSettings lines={2} text={Resources.MEDICATION_HC_BASE_BREKFAST} number={"1"} value={this.state.hc_brekfast}/>
            <UserSettings lines={2} text={Resources.MEDICATION_HC_BASE_FOOD} number={"1"} value={this.state.hc_food}/>
            <UserSettings lines={2} text={Resources.MEDICATION_HC_BASE_SNACK} number={"1"} value={this.state.hc_snack}/>
            <UserSettings lines={2} text={Resources.MEDICATION_HC_BASE_DINNER} number={"1"} value={this.state.hc_dinner}/>
          </View>
          <View style={{borderColor: '#0069d9', borderWidth: 2, marginBottom: 10, backgroundColor: '#adccea'}}>
            <UserSettings lines={2} text={Resources.MEDICATION_INSULIN_BASE_BREKFAST} number={"1"} value={this.state.insulin_brekfast}/>
            <UserSettings lines={2} text={Resources.MEDICATION_INSULIN_BASE_FOOD} number={"1"} value={this.state.insulin_food}/>
            <UserSettings lines={2} text={Resources.MEDICATION_INSULIN_BASE_SNACK} number={"1"} value={this.state.insulin_snack}/>
            <UserSettings lines={2} text={Resources.MEDICATION_INSULIN_BASE_DINNER} number={"1"} value={this.state.insulin_dinner}/>
          </View>
          <View style={{borderColor: '#0069d9', borderWidth: 2, marginBottom: 10, backgroundColor: '#adccea'}}>
            <UserSettings lines={2} text={Resources.MEDICATION_RANGE_HC_UNDER_INTERVAL_MIN} number={"1"} value={this.state.range_under_hc}/>
            <UserSettings lines={2} text={Resources.MEDICATION_RANGE_HC_OVER_INTERVAL_MAX} number={"1"} value={this.state.range_over_hc}/>
          </View>
          <View style={{borderColor: '#0069d9', borderWidth: 2, marginBottom: 10, backgroundColor: '#adccea'}}>
            <UserSettings lines={2} text={Resources.MEDICATION_RANGE_INSULIN_UNDER_INTERVAL_MIN} number={"1"} value={this.state.range_under_insulin}/>
            <UserSettings lines={2} text={Resources.MEDICATION_RANGE_INSULIN_OVER_INTERVAL_MAX} number={"1"} value={this.state.range_over_insulin}/>
          </View>
          <Button
            title="Insertar datos"
            onPress={() => this.saveChangesInFirestore()}
          />
        </View>
      </ScrollView>
    );
  }
}

class UserSettings extends UserScreen{
  constructor(props){
    super(props);
    this.text = props.text;
    this.value = props.value;
    this.label = props.label;
  }

  onChangeState(name, text){
    super.onChangeState(name, text)
    this.value = text;
  }

  render(){
    return(
      <View
        style={{
          paddingHorizontal: 15,
          width: 350,
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 5,
          flexDirection: "row"}}
      >
      <Text
        style={{
          fontSize: 15,
          textTransform:"uppercase"
        }}
      >
        {this.text}
      </Text>
      <TextInput
        keyboardType={'numeric'}
        placeholder={"Values"}
        value={this.value}
        placeholderTextColor={"#444"}
        onChangeText={(text) => this.onChangeState(this.label, text)}
      />
    </View>
  );
  }
}
