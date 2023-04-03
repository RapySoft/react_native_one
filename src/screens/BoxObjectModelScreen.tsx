import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Box object model</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b4b4b4',
  },
  title: {
    marginTop: 30,
    marginHorizontal: 40,
    textAlign: 'center',
    fontSize: 18,
    color: '#3f0e77',
    borderWidth: 2,
  },
});
