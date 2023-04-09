import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Tab2Screen = () => {
  return (
    <View style={styles.container}>
      <Text>screen tab 2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
