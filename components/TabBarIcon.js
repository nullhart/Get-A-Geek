import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Theme from '../constants/Theme'


export default function TabBarIcon(props) {
  return (
    <Ionicons
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? Theme.Green : Theme.Black}
    />
  );
}
