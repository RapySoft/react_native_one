import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  position?: 'br' | 'bl';
}

export const ButtonFab = (props: Props) => {
  const position = props.position ?? 'br';
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={[styles.fab, position === 'bl' ? styles.left : styles.right]}
      onPress={props.onPress}>
      <Text style={styles.fabText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  left: {
    left: 25,
  },
  right: {
    right: 25,
  },
  fab: {
    backgroundColor: '#0e0afb',
    borderRadius: 50,
    bottom: 25,
    height: 60,
    justifyContent: 'center',
    position: 'absolute',
    width: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  fabText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
});
