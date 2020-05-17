import * as React from 'react';

import { Text, View, Dimensions } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';

export function HistoryComponent({title, value}) {
  return (
      <View style={{width: Dimensions.get('window').width / 2.01, height: 170, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#ddd', borderBottomWidth: 0, borderRightWidth: 0}}>
        <Text style={{textTransform: 'uppercase', fontWeight: 'bold', color: '#2069b2', fontSize: 23, textAlign: 'center'}}>{title}</Text>
        {value != null ? <Text style={{textTransform: 'uppercase', color: '#adccea', fontSize: 18}}>{value}</Text> : <ActivityIndicator animating={true} size={20} color={Colors.blue700} />}
      </View>
  )
}

export function MultipleHistoryComponent({title, value, titleChilds, childs}) {
  return (
      <View style={{width: Dimensions.get('window').width, height: 170, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#ddd', borderBottomWidth: 0, borderRightWidth: 0}}>
        <Text style={{textTransform: 'uppercase', fontWeight: 'bold', color: '#2069b2', fontSize: 23, textAlign: 'center'}}>{title}</Text>
        {value != null ? <Text style={{textTransform: 'uppercase', color: '#adccea', fontSize: 18}}>{value}</Text> : <ActivityIndicator animating={true} size={20} color={Colors.blue700} />}
        <View style={{flexDirection: 'row', paddingVertical: 15}}>
          {renderChilds(titleChilds, childs)}
        </View>
      </View>
  )
}


function renderChilds(titleChilds, childs){
  var size = childs.length;
  var component = [];
  for (var i = 0; i < childs.length; i++) {
    component.push(<View style={{width: Dimensions.get('window').width / size, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{textTransform: 'uppercase', fontWeight: 'bold', color: '#2069b2', fontSize: 15, textAlign: 'center'}}>{titleChilds[i]}</Text>
      <Text style={{textTransform: 'uppercase', color: '#adccea', fontSize: 18}}>{childs[i]}</Text>
    </View>);
  }

  return component;
}
