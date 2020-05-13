import * as React from 'react';

import { Text, SafeAreaView, Image, View } from 'react-native';
import { Divider } from 'react-native-paper';

import NavigationTop from './../components/NavigationTop';

import Resources from './../config/resources/resources';


export default class ReaderScreenResult extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <SafeAreaView style={{backgroundColor: '#fff'}}>
        <NavigationTop
          title={Resources.READER_HEADER}
        />
        <View style={{backgroundColor: '#fff', marginTop: 150, paddingBottom: 250, alignItems: 'center'}}>
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
      </SafeAreaView>
    );
  }

}
