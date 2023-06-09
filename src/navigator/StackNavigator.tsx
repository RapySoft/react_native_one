import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Pagina1Screen} from '../screens/navigation/Page1Screen';
import {Pagina2Screen} from '../screens/navigation/Page2Screen';
import {Pagina3Screen} from '../screens/navigation/Page3Screen';
import {HomeScreen} from '../screens/HomeScreen';
import {PersonaScreen} from '../screens/navigation/PersonaScreen';
import {PersonInterface} from '../interfaces/PersonInterface';
import {CalculadoraScreen} from '../screens/CalculadorScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  Pagina1Screen: undefined;
  Pagina2Screen: undefined;
  Pagina3Screen: undefined;
  calculadora: undefined;
  PersonaScreen: PersonInterface;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="HomeScreen"
        options={{title: 'Home'}}
        component={HomeScreen}
      />
      <Stack.Screen
        name="Pagina1Screen"
        options={{title: 'Page One'}}
        component={Pagina1Screen}
      />
      <Stack.Screen
        name="Pagina2Screen"
        options={{title: 'Page Two'}}
        component={Pagina2Screen}
      />
      <Stack.Screen
        name="Pagina3Screen"
        options={{title: 'Page Three'}}
        component={Pagina3Screen}
      />
      <Stack.Screen
        name="PersonaScreen"
        options={{title: 'Persona'}}
        component={PersonaScreen}
      />
      <Stack.Screen
        name="calculadora"
        options={{title: 'Calculadora'}}
        component={CalculadoraScreen}
      />
    </Stack.Navigator>
  );
};
