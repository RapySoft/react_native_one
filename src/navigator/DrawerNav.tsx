import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/navigation/SettingsScreen';
import {TabNavigator} from './TabNavigator';

export type RootStackParams = {
  TabNavigator: undefined;
  SettingsScreen: undefined;
};

const Drawer = createDrawerNavigator<RootStackParams>();

export const DrawerNav = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation={true}
      initialRouteName="TabNavigator">
      <Drawer.Screen
        name="TabNavigator"
        options={{title: 'Home'}}
        component={TabNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
