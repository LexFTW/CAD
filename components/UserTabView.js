import React, {Component} from 'react';

import { Text, TextInput, Button, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { TabView,TabBar, SceneMap } from 'react-native-tab-view';
import { IconButton, Colors, Avatar } from 'react-native-paper';

import  styles  from '../constants/styles/UserStyles';

import Resources from './../config/resources/resources';

import firebase from '../config/firebase';

var state;

const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: Resources.PROFILE_SETTINGS_MEDICATION },
    { key: 'second', title: Resources.PROFILE_SETTINGS_PROFILE },
  ]);

  state = props.state;

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

export default class TabViewExample extends Component {
  constructor(props) {
    super(props);
    this.state = props.state;
  }

  render() {
    return (
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={props =>
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'yellow' }}
            style={{ backgroundColor: '#2069b2' }}
          />
        }
      />
    )
  }
}

const FirstRoute = () => (
<ScrollView>
  <View style={styles.containterBody}>
    <View style={styles.containerComp}>
      <View style={styles.component}>
        <Text style={styles.key}>{Resources.MEDICATION_GLUCOSE_INTERVAL_MAX}</Text>
        <TextInput keyboardType={'numeric'} placeholder={'Values'} value={state.interval_max} placeholderTextColor={"#444"} onChangeText={interval_max => state.setState({ interval_max })} />
      </View>
      <View style={styles.component}>
        <Text style={styles.key}>{Resources.MEDICATION_GLUCOSE_INTERVAL_MIN}</Text>
        <TextInput keyboardType={'numeric'} placeholder={'Values'} value={state.interval_min} placeholderTextColor={"#444"} onChangeText={interval_min => state.setState({ interval_min })} />
      </View>
    </View>
    <View style={styles.containerComp}>
      <View style={styles.component}>
        <Text style={styles.key}>{Resources.MEDICATION_HC_BASE_BREKFAST}</Text>
        <TextInput keyboardType={'numeric'} placeholder={'Values'} value={state.hc_brekfast} placeholderTextColor={"#444"} onChangeText={hc_brekfast => state.setState({ hc_brekfast })} />
      </View>
      <View style={styles.component}>
        <Text style={styles.key}>{Resources.MEDICATION_HC_BASE_FOOD}</Text>
        <TextInput keyboardType={'numeric'} placeholder={'Values'} value={state.hc_food} placeholderTextColor={"#444"} onChangeText={hc_food => state.setState({ hc_food })} />
      </View>
      <View style={styles.component}>
        <Text style={styles.key}>{Resources.MEDICATION_HC_BASE_SNACK}</Text>
        <TextInput keyboardType={'numeric'} placeholder={'Values'} value={state.hc_snack} placeholderTextColor={"#444"} onChangeText={hc_snack => state.setState({ hc_snack })} />
      </View>
      <View style={styles.component}>
        <Text style={styles.key}>{Resources.MEDICATION_HC_BASE_DINNER}</Text>
        <TextInput keyboardType={'numeric'} placeholder={'Values'} value={state.hc_dinner} placeholderTextColor={"#444"} onChangeText={hc_dinner => state.setState({ hc_dinner })} />
      </View>
    </View>
    <View style={styles.containerComp}>
      <View style={styles.component}>
        <Text style={styles.key}>{Resources.MEDICATION_INSULIN_BASE_BREKFAST}</Text>
        <TextInput keyboardType={'numeric'} placeholder={'Values'} value={state.insulin_brekfast} placeholderTextColor={"#444"} onChangeText={insulin_brekfast => state.setState({ insulin_brekfast })} />
      </View>
      <View style={styles.component}>
        <Text style={styles.key}>{Resources.MEDICATION_INSULIN_BASE_FOOD}</Text>
        <TextInput keyboardType={'numeric'} placeholder={'Values'} value={state.insulin_food} placeholderTextColor={"#444"} onChangeText={insulin_food => state.setState({ insulin_food })} />
      </View>
      <View style={styles.component}>
        <Text style={styles.key}>{Resources.MEDICATION_INSULIN_BASE_SNACK}</Text>
        <TextInput keyboardType={'numeric'} placeholder={'Values'} value={state.insulin_snack} placeholderTextColor={"#444"} onChangeText={insulin_snack => state.setState({ insulin_snack })} />
      </View>
      <View style={styles.component}>
        <Text style={styles.key}>{Resources.MEDICATION_INSULIN_BASE_DINNER}</Text>
        <TextInput keyboardType={'numeric'} placeholder={'Values'} value={state.insulin_dinner} placeholderTextColor={"#444"} onChangeText={insulin_dinner => state.setState({ insulin_dinner })} />
      </View>
    </View>
    <View style={styles.containerComp}>
      <View style={styles.component}>
        <Text style={styles.key}>{Resources.MEDICATION_RANGE_HC_UNDER_INTERVAL_MIN}</Text>
        <TextInput keyboardType={'numeric'} placeholder={'Values'} value={state.range_under_hc} placeholderTextColor={"#444"} onChangeText={range_under_hc => state.setState({ range_under_hc })} />
      </View>
      <View style={styles.component}>
        <Text style={styles.key}>{Resources.MEDICATION_RANGE_HC_OVER_INTERVAL_MAX}</Text>
        <TextInput keyboardType={'numeric'} placeholder={'Values'} value={state.range_over_hc} placeholderTextColor={"#444"} onChangeText={range_over_hc => state.setState({ range_over_hc })} />
      </View>
    </View>
    <View style={styles.containerComp}>
      <View style={styles.component}>
        <Text style={styles.key}>{Resources.MEDICATION_RANGE_INSULIN_UNDER_INTERVAL_MIN}</Text>
        <TextInput keyboardType={'numeric'} placeholder={'Values'} value={state.range_under_insulin} placeholderTextColor={"#444"} onChangeText={range_under_insulin => state.setState({ range_under_insulin })} />
      </View>
      <View style={styles.component}>
        <Text style={styles.key}>{Resources.MEDICATION_RANGE_INSULIN_OVER_INTERVAL_MAX}</Text>
        <TextInput keyboardType={'numeric'} placeholder={'Values'} value={state.range_over_insulin} placeholderTextColor={"#444"} onChangeText={range_over_insulin => state.setState({ range_over_insulin })} />
      </View>
    </View>
    <Button
    title="Insertar datos"
    onPress={() => this.saveChangesInFirestore()}
    />
  </View>
</ScrollView>
);

const SecondRoute = () => (
  <View style={[s.scene, { backgroundColor: '#2069b2' }]} />
);

const initialLayout = { width: Dimensions.get('window').width };

const s = StyleSheet.create({
  scene: {
    flex: 1,
  }
});
