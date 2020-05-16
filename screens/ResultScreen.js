import * as React from 'react';

import { Dimensions, Text, TextInput, SafeAreaView, Image, View } from 'react-native';
import { Button, Divider } from 'react-native-paper';

import NavigationTop from './../components/NavigationTop';

import Resources from './../config/resources/resources';


export default class ResultScreen extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    console.disableYellowBox = true;
    return(
      <SafeAreaView style={{backgroundColor: '#fff'}}>
        <NavigationTop
          title={Resources.READER_HEADER}
        />
        <Text style={{position: 'absolute', right: 10, top: 100, color: 'red', fontWeight: 'bold'}}>IN PROGRESS</Text>
        <View style={{backgroundColor: '#fff', marginTop: 150, alignItems: 'center'}}>
          <Text style={{color: '#2069b2', fontSize: 90, fontWeight: 'bold'}}>150</Text>
          <Divider />
          <View style={{position:'relative', marginVertical: 15, padding: 10,}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{alignItems: 'center'}}>
                <Image
                  style={{width: 60, height: 60, margin: 10}}
                  source={require('./../assets/images/brekfast.png')}
                />
                <View style={{backgroundColor: '#2069b2', width: 20, height: 20, borderRadius: 50}}></View>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image
                  style={{width: 60, height: 60, margin: 10}}
                  source={require('./../assets/images/food.png')}
                />
                <View style={{backgroundColor: '#2069b2', width: 20, height: 20, borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
                  <View style={{backgroundColor: '#fff', width: 10, height: 10, borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}></View>
                </View>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image
                  style={{width: 60, height: 60, margin: 10}}
                  source={require('./../assets/images/snack.png')}
                />
                <View style={{backgroundColor: '#2069b2', width: 20, height: 20, borderRadius: 50}}></View>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image
                  style={{width: 60, height: 60, margin: 10}}
                  source={require('./../assets/images/dinner.png')}
                />
                <View style={{backgroundColor: '#2069b2', width: 20, height: 20, borderRadius: 50}}></View>
              </View>
            </View>
          </View>
          <Divider
            style={{backgroundColor: '#2069b2'}}
          />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20, paddingBottom: 250}}>
          <Text style={{color: '#2069b2', fontWeight: 'bold', fontSize: 15}}>Enter the Carbohydrates to consume (in grams)</Text>
          <TextInput
            style={{fontSize: 40, textAlign: 'center', color: '#2069b2', borderRadius: 10, marginVertical: 15, borderWidth: 1, borderColor: '#ddd', width: Dimensions.get('window').width - 50}}
            value={'140'}
          />
          <Button
            mode="contained"
            style={{backgroundColor: '#2069b2', width: Dimensions.get('window').width - 50}}
          >
            Save data
          </Button>
        </View>
      </SafeAreaView>
    );
  }

}
