import * as React from 'react';

import { Dimensions } from 'react-native';
import { TabView,TabBar, SceneMap } from 'react-native-tab-view';

import Resources from './../config/resources/resources';

import MedicationScreen from '../screens/MedicationScreen';

export default function TabViewExample(props) {
  const initialLayout = { width: Dimensions.get('window').width };
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: Resources.PROFILE_SETTINGS_MEDICATION },
  ]);

  const renderScene = SceneMap({
    first: MedicationScreen,
  });

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
  );
}
