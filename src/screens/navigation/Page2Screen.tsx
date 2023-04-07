import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {AppStyle} from '../../theme/AppStyle';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

export const Pagina2Screen = (props: Props) => {
  useEffect(() => {
    props.navigation.setOptions({title: 'Pag 2', headerBackTitle: 'atras'});
  }, [props.navigation]);

  return (
    <View style={styles.container}>
      <Text style={AppStyle.title}>Pagina2Screen</Text>
      <Button
        title="Pagina 3"
        onPress={() => props.navigation.navigate('Pagina3Screen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
