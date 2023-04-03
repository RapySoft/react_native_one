import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {ButtonCalculadora} from '../components/ButtonCalculadora';
import {styles} from '../theme/CalculadoraTheme';

export const CalculadoraScreen = () => {
  return (
    <SafeAreaView style={styles.containerGlobal}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.containerCalculadora}>
        <Text style={styles.textResultOne}>1.500</Text>
        <Text style={styles.textResultTwo}>1.500</Text>
        <View style={styles.containerRow}>
          <ButtonCalculadora
            onPress={() => console.log('C')}
            textColor="black"
            title="C"
            backgroundColor="#c0bcbc"
          />
          <ButtonCalculadora
            onPress={() => console.log('+/-')}
            textColor="black"
            title="+/-"
            backgroundColor="#c0bcbc"
          />
          <ButtonCalculadora
            onPress={() => console.log('%')}
            textColor="black"
            title="%"
            backgroundColor="#c0bcbc"
          />
          <ButtonCalculadora
            onPress={() => console.log('/')}
            title="/"
            backgroundColor="#edb525"
          />
        </View>
        <View style={styles.containerRow}>
          <ButtonCalculadora
            onPress={() => console.log('7')}
            textColor="black"
            title="7"
            backgroundColor="#535353"
          />
          <ButtonCalculadora
            onPress={() => console.log('8')}
            textColor="black"
            title="8"
            backgroundColor="#535353"
          />
          <ButtonCalculadora
            onPress={() => console.log('8')}
            textColor="black"
            title="8"
            backgroundColor="#535353"
          />
          <ButtonCalculadora
            onPress={() => console.log('X')}
            title="X"
            backgroundColor="#edb525"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
