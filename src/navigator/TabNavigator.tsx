import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens/Tab1Screen';
import {Tab2Screen} from '../screens/Tab2Screen';
import {StackNavigator} from './StackNavigator';

export type RootTabsParams = {
  Tap1Screen: undefined;
  Tap2Screen: undefined;
  Tap3Screen: undefined;
};

const Tab = createBottomTabNavigator<RootTabsParams>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Tap1Screen"
        options={{title: 'Tap1'}}
        component={Tab1Screen}
      />
      <Tab.Screen name="Tap2Screen" component={Tab2Screen} />
      <Tab.Screen name="Tap3Screen" component={StackNavigator} />
    </Tab.Navigator>
  );
};
