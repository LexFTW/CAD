import React, {Component} from 'react';

import { Text, SafeAreaView, View, Dimensions } from 'react-native';
import { IconButton } from 'react-native-paper';

import Resources from './../config/resources/resources';

import NavigationTop from './../components/NavigationTop';

export default class ReaderScreen extends Component {

  render(){
    return (
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems: 'center',
      }}>
        <NavigationTop
          title={Resources.READER_HEADER}
        />

        <View style={{backgroundColor: '#efefef', padding: 5, borderRadius: 150, marginTop: 95}}>
          <IconButton
            icon="wifi"
            color={'#2069b2'}
            style={{backgroundColor: 'white', color: '#2069b2', shadowColor: '#000', shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5}}
            size={150}
            onPress={() => this.props.navigation.navigate('Result')}
          />
        </View>

        <View style={{width: Dimensions.get('window').width, flexDirection: 'row', flexWrap: 'wrap', position: 'absolute', bottom: 0,}}>
          <HistoryComponent title={Resources.BREAKFAST} value={"195"} />
          <HistoryComponent title={Resources.FOOD} value={"150"} />
          <HistoryComponent title={Resources.SNACK} value={"-"} />
          <HistoryComponent title={Resources.DINNER} value={"-"} />
        </View>
      </SafeAreaView>
    );
  }

}

function HistoryComponent({title, value}) {
  return (
      <View style={{width: Dimensions.get('window').width / 2, height: Dimensions.get('window').height / 5, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#ddd', borderBottomWidth: 0, borderRightWidth: 0}}>
        <Text style={{textTransform: 'uppercase', fontWeight: 'bold', color: '#2069b2', fontSize: 25, textAlign: 'center'}}>{title}</Text>
        <Text style={{textTransform: 'uppercase', color: '#8db1d3', fontSize: 18, textAlign: 'center', paddingVertical: 5}}>{value}</Text>
      </View>
  )
}
