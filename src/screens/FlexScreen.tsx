import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>Caja 1</Text>
      <Text style={styles.box2}>Caja 2</Text>
      <Text style={styles.box3}>Caja 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  box1: {
    fontSize: 20,
    backgroundColor: 'red',
  },
  box2: {
    fontSize: 20,
    backgroundColor: 'yellow',
  },
  box3: {
    fontSize: 20,
    backgroundColor: 'green',
  },
});
