import React from 'react';
import {StyleSheet, useWindowDimensions, View} from 'react-native';

export const DimensionesScreen = () => {
  const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View style={{...styles.box1, width: width * 0.5}} />
      <View style={styles.box2} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: '#393838',
  },

  box1: {
    backgroundColor: '#ba2e2e',
    height: '50%',
    width: '50%',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  box2: {
    backgroundColor: '#1e5bd5',
    height: 50,
    width: 50,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
