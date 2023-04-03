import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface PropsButton {
  title: string;
  textColor?: 'black' | 'white';
  onPress: () => void;
  backgroundColor?: '#c0bcbc' | '#535353' | '#edb525';
}

export const ButtonCalculadora = (props: PropsButton) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        ...styles.touch,
        backgroundColor: props.backgroundColor ?? '#c0bcbc',
      }}>
      <Text style={{...styles.text, color: props.textColor ?? 'white'}}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touch: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: '#ffff',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
