import React from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native';
export const PositionScreen = () => {
  const {width, height} = useWindowDimensions();

  return (
    <View
      style={{...styles.container, width: width * 0.8, height: height * 0.8}}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box4} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 400,
    backgroundColor: 'black',
    ...StyleSheet.absoluteFillObject,
  },
  box1: {
    // width: 50,
    // height: 50,
    backgroundColor: 'red',
    //position: 'absolute',
    borderColor: 'blue',
    borderWidth: 5,
    //top: 0,
    //left: 0,
    ...StyleSheet.absoluteFillObject,
  },
  box2: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    position: 'absolute',
    borderColor: 'red',
    borderWidth: 5,
    bottom: 0,
    left: 0,
    alignContent: 'center',
  },
  box3: {
    width: 50,
    height: 50,
    backgroundColor: 'gray',
    position: 'absolute',
    borderColor: 'red',
    borderWidth: 5,
    top: 0,
    right: 0,
    alignContent: 'center',
  },
  box4: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    position: 'absolute',
    borderColor: 'red',
    borderWidth: 5,
    bottom: 0,
    right: 0,
    alignContent: 'center',
  },
});
