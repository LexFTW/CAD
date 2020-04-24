import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';

import Colors from '../constants/Colors';

export default function TabBarIconFontAwesome(props) {
  return (
    <FontAwesome
      name={props.name}
      size={props.size}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
