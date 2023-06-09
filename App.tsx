import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
//import {DrawerNav} from './src/navigator/DrawerNav';
import {StackNavigator} from './src/navigator/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <DrawerNav /> */}
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
