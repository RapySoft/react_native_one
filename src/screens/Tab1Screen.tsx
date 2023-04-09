import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/dist/Ionicons';

export const Tab1Screen = () => {
  return (
    <View style={styles.container}>
      <Text>
        <Icon name="ios-logo-xbox" size={30} color="#900" />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
