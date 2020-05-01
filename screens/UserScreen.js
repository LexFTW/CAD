import * as React from 'react';

import { ScrollView, Text, TextInput, SafeAreaView, Alert, View, Button  } from 'react-native';
import { IconButton, Colors, Divider, Avatar } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import NavigationTop from './../components/NavigationTop';

import  base  from '../constants/styles/Styles';

import Resources from './../config/resources/resources';

import firebase from '../config/firebase';
import 'firebase/firestore';

const firestore = firebase.firestore();

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
            <View style={{paddingHorizontal: 15, width: 350, alignItems: "center", justifyContent: "space-between", paddingVertical: 5, flexDirection: "row"}}>
              <Text style={{fontSize: 15, textTransform:"uppercase"}}>{Resources.MEDICATION_GLUCOSE_INTERVAL_MAX}</Text>
              <TextInput keyboardType={'numeric'} placeholder={'Values'} value={this.state.interval_max} placeholderTextColor={"#444"} onChangeText={interval_max => this.setState({ interval_max })} />
            </View>
            <View style={{paddingHorizontal: 15, width: 350, alignItems: "center", justifyContent: "space-between", paddingVertical: 5, flexDirection: "row"}}>
              <Text style={{fontSize: 15, textTransform:"uppercase"}}>{Resources.MEDICATION_GLUCOSE_INTERVAL_MIN}</Text>
              <TextInput keyboardType={'numeric'} placeholder={'Values'} value={this.state.interval_min} placeholderTextColor={"#444"} onChangeText={interval_min => this.setState({ interval_min })} />
            </View>
          </View>
          <View style={{borderColor: '#0069d9', borderWidth: 2, marginBottom: 10, backgroundColor: '#adccea'}}>
            <View style={{paddingHorizontal: 15, width: 350, alignItems: "center", justifyContent: "space-between", paddingVertical: 5, flexDirection: "row"}}>
              <Text style={{fontSize: 15, textTransform:"uppercase"}}>{Resources.MEDICATION_HC_BASE_BREKFAST}</Text>
              <TextInput keyboardType={'numeric'} placeholder={'Values'} value={this.state.hc_brekfast} placeholderTextColor={"#444"} onChangeText={hc_brekfast => this.setState({ hc_brekfast })} />
            </View>
            <View style={{paddingHorizontal: 15, width: 350, alignItems: "center", justifyContent: "space-between", paddingVertical: 5, flexDirection: "row"}}>
              <Text style={{fontSize: 15, textTransform:"uppercase"}}>{Resources.MEDICATION_HC_BASE_FOOD}</Text>
              <TextInput keyboardType={'numeric'} placeholder={'Values'} value={this.state.hc_food} placeholderTextColor={"#444"} onChangeText={hc_food => this.setState({ hc_food })} />
            </View>
            <View style={{paddingHorizontal: 15, width: 350, alignItems: "center", justifyContent: "space-between", paddingVertical: 5, flexDirection: "row"}}>
              <Text style={{fontSize: 15, textTransform:"uppercase"}}>{Resources.MEDICATION_HC_BASE_SNACK}</Text>
              <TextInput keyboardType={'numeric'} placeholder={'Values'} value={this.state.hc_snack} placeholderTextColor={"#444"} onChangeText={hc_snack => this.setState({ hc_snack })} />
            </View>
            <View style={{paddingHorizontal: 15, width: 350, alignItems: "center", justifyContent: "space-between", paddingVertical: 5, flexDirection: "row"}}>
              <Text style={{fontSize: 15, textTransform:"uppercase"}}>{Resources.MEDICATION_HC_BASE_DINNER}</Text>
              <TextInput keyboardType={'numeric'} placeholder={'Values'} value={this.state.hc_dinner} placeholderTextColor={"#444"} onChangeText={hc_dinner => this.setState({ hc_dinner })} />
            </View>
          </View>
          <View style={{borderColor: '#0069d9', borderWidth: 2, marginBottom: 10, backgroundColor: '#adccea'}}>
            <View style={{paddingHorizontal: 15, width: 350, alignItems: "center", justifyContent: "space-between", paddingVertical: 5, flexDirection: "row"}}>
              <Text style={{fontSize: 15, textTransform:"uppercase"}}>{Resources.MEDICATION_INSULIN_BASE_BREKFAST}</Text>
              <TextInput keyboardType={'numeric'} placeholder={'Values'} value={this.state.insulin_brekfast} placeholderTextColor={"#444"} onChangeText={insulin_brekfast => this.setState({ insulin_brekfast })} />
            </View>
            <View style={{paddingHorizontal: 15, width: 350, alignItems: "center", justifyContent: "space-between", paddingVertical: 5, flexDirection: "row"}}>
              <Text style={{fontSize: 15, textTransform:"uppercase"}}>{Resources.MEDICATION_INSULIN_BASE_FOOD}</Text>
              <TextInput keyboardType={'numeric'} placeholder={'Values'} value={this.state.insulin_food} placeholderTextColor={"#444"} onChangeText={insulin_food => this.setState({ insulin_food })} />
            </View>
            <View style={{paddingHorizontal: 15, width: 350, alignItems: "center", justifyContent: "space-between", paddingVertical: 5, flexDirection: "row"}}>
              <Text style={{fontSize: 15, textTransform:"uppercase"}}>{Resources.MEDICATION_INSULIN_BASE_SNACK}</Text>
              <TextInput keyboardType={'numeric'} placeholder={'Values'} value={this.state.insulin_snack} placeholderTextColor={"#444"} onChangeText={insulin_snack => this.setState({ insulin_snack })} />
            </View>
            <View style={{paddingHorizontal: 15, width: 350, alignItems: "center", justifyContent: "space-between", paddingVertical: 5, flexDirection: "row"}}>
              <Text style={{fontSize: 15, textTransform:"uppercase"}}>{Resources.MEDICATION_INSULIN_BASE_DINNER}</Text>
              <TextInput keyboardType={'numeric'} placeholder={'Values'} value={this.state.insulin_dinner} placeholderTextColor={"#444"} onChangeText={insulin_dinner => this.setState({ insulin_dinner })} />
            </View>
          </View>
          <View style={{borderColor: '#0069d9', borderWidth: 2, marginBottom: 10, backgroundColor: '#adccea'}}>
            <View style={{paddingHorizontal: 15, width: 350, alignItems: "center", justifyContent: "space-between", paddingVertical: 5, flexDirection: "row"}}>
              <Text style={{fontSize: 15, textTransform:"uppercase"}}>{Resources.MEDICATION_RANGE_HC_UNDER_INTERVAL_MIN}</Text>
              <TextInput keyboardType={'numeric'} placeholder={'Values'} value={this.state.range_under_hc} placeholderTextColor={"#444"} onChangeText={range_under_hc => this.setState({ range_under_hc })} />
            </View>
            <View style={{paddingHorizontal: 15, width: 350, alignItems: "center", justifyContent: "space-between", paddingVertical: 5, flexDirection: "row"}}>
              <Text style={{fontSize: 15, textTransform:"uppercase"}}>{Resources.MEDICATION_RANGE_HC_OVER_INTERVAL_MAX}</Text>
              <TextInput keyboardType={'numeric'} placeholder={'Values'} value={this.state.range_over_hc} placeholderTextColor={"#444"} onChangeText={range_over_hc => this.setState({ range_over_hc })} />
            </View>
          </View>
          <View style={{borderColor: '#0069d9', borderWidth: 2, marginBottom: 10, backgroundColor: '#adccea'}}>
            <View style={{paddingHorizontal: 15, width: 350, alignItems: "center", justifyContent: "space-between", paddingVertical: 5, flexDirection: "row"}}>
              <Text style={{fontSize: 15, textTransform:"uppercase"}}>{Resources.MEDICATION_RANGE_INSULIN_UNDER_INTERVAL_MIN}</Text>
              <TextInput keyboardType={'numeric'} placeholder={'Values'} value={this.state.range_under_insulin} placeholderTextColor={"#444"} onChangeText={range_under_insulin => this.setState({ range_under_insulin })} />
            </View>
            <View style={{paddingHorizontal: 15, width: 350, alignItems: "center", justifyContent: "space-between", paddingVertical: 5, flexDirection: "row"}}>
              <Text style={{fontSize: 15, textTransform:"uppercase"}}>{Resources.MEDICATION_RANGE_INSULIN_OVER_INTERVAL_MAX}</Text>
              <TextInput keyboardType={'numeric'} placeholder={'Values'} value={this.state.range_over_insulin} placeholderTextColor={"#444"} onChangeText={range_over_insulin => this.setState({ range_over_insulin })} />
            </View>
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
