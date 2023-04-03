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
            backgroundColor="#FF9427"
          />
        </View>
        <View style={styles.containerRow}>
          <ButtonCalculadora onPress={() => console.log('7')} title="7" />
          <ButtonCalculadora onPress={() => console.log('8')} title="8" />
          <ButtonCalculadora onPress={() => console.log('9')} title="9" />
          <ButtonCalculadora
            onPress={() => console.log('X')}
            title="X"
            backgroundColor="#FF9427"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
