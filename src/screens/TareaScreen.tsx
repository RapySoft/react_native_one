import React from 'react';
import {StyleSheet, View} from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'purple',
  },
  box2: {
    width: 50,
    height: 50,
    top: 25,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'orange',
  },
  box3: {
    start:-50,
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'cyan',
  },
});
