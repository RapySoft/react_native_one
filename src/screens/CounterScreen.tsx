import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ButtonFab} from '../components/ButtonFab';

export const CounterScreen = () => {
  const [counter, setcounter] = useState(0);

  function onPressAdd() {
    setcounter(counter + 1);
  }

  function onPressRes() {
    setcounter(counter - 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>Contador {counter}</Text>
      <ButtonFab title="+1" onPress={onPressAdd} position="br" />
      <ButtonFab title="-1" onPress={onPressRes} position="bl" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  counter: {fontSize: 40, textAlign: 'center'},
  buttonView: {
    justifyContent: 'center',
    backgroundColor: '#1092ef',
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  buttonRight: {
    position: 'absolute',
    bottom: 40,
    right: 40,
  },
  buttonLeft: {
    position: 'absolute',
    bottom: 40,
    left: 40,
  },
  textButton: {
    color: 'white',
    alignSelf: 'center',
  },
});
