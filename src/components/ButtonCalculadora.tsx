import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export interface PropsButtonCal {
  title: string;
  textColor?: 'black';
  onPress: (value: string) => void;
  with?: number;
  backgroundColor?: '#c0bcbc' | '#FF9427';
}

export const ButtonCalculadora = (props: PropsButtonCal) => {
  return (
    <TouchableOpacity
      onPress={() => props.onPress(props.title)}
      style={{
        ...styles.touch,
        backgroundColor: props.backgroundColor ?? '#2D2D2D',
        width: props.with ?? 80,
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
    textAlign: 'center',
  },
});
