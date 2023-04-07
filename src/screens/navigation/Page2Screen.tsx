import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export const Pagina2Screen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Pagina2Screen</Text>
      <Button
        title="Pagina 3"
        onPress={() => navigation.navigate('Pagina3Screen' as never)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
