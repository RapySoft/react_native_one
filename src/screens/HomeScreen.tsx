import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {PersonInterface} from '../interfaces/PersonInterface';

interface Props extends StackScreenProps<any, any> {}

export const HomeScreen = (props: Props) => {
  function navigateScreen(name: string, arg?: any) {
    props.navigation.navigate(name, arg);
  }

  const personaPedro: PersonInterface = {
    id: 12,
    name: 'Pedro',
    lastName: 'Pizza',
  };

  const personaJuan: PersonInterface = {
    id: 12,
    name: 'Juan',
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateScreen('PersonaScreen', personaPedro)}>
        <Text style={styles.text}>Navegar persona (pedro)</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateScreen('PersonaScreen', personaJuan)}>
        <Text style={styles.text}>Navegar persona (juan)</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateScreen('Pagina1Screen')}>
        <Text style={styles.text}>Navegar pag 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateScreen('Pagina2Screen')}>
        <Text style={styles.text}>Navegar pag 2</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateScreen('Pagina3Screen')}>
        <Text style={styles.text}>Navegar pag 3</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginBottom: 5,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  text: {
    color: 'blue',
  },
});
