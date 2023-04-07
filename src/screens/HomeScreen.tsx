import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> {}

export const HomeScreen = (props: Props) => {
  function navigateScreen(name: string) {
    props.navigation.navigate(name);
  }

  return (
    <View style={styles.container}>
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
