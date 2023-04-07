import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppStyle} from '../../theme/AppStyle';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen = (props: Props) => {
  const persona = props.route.params;

  return (
    <View style={styles.container}>
      <Text style={AppStyle.title}>{JSON.stringify(persona)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
