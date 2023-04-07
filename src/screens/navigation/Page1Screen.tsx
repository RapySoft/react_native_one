import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppStyle} from '../../theme/AppStyle';

export const Pagina1Screen = () => {
  return (
    <View style={styles.container}>
      <Text style={AppStyle.title}>Pagina1Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
