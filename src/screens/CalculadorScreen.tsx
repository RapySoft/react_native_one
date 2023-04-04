import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {ButtonCalculadora} from '../components/ButtonCalculadora';
import {styles} from '../theme/CalculadoraTheme';
import {OperationsEnum, useCalculator} from '../hooks/useCalculator';

export const CalculadoraScreen = () => {
  const {
    resultCal,
    addNumber,
    changeType,
    clearNumber,
    delNumber,
    operationCal,
    numberOne,
    numberTwo,
    signoRef,
  } = useCalculator();
  return (
    <SafeAreaView style={styles.containerGlobal}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.containerCalculadora}>
        <View style={styles.containerRowSigno}>
          <Text
            style={styles.textResultTwo}
            numberOfLines={1}
            adjustsFontSizeToFit={true}>
            {numberTwo}
          </Text>
          <Text style={styles.textSigno}>{signoRef.current}</Text>
        </View>
        <Text
          style={styles.textResultOne}
          numberOfLines={1}
          adjustsFontSizeToFit={true}>
          {numberOne}
        </Text>
        <View style={styles.containerRow}>
          <ButtonCalculadora
            onPress={clearNumber}
            textColor="black"
            title="C"
            backgroundColor="#c0bcbc"
          />
          <ButtonCalculadora
            onPress={changeType}
            textColor="black"
            title="+/-"
            backgroundColor="#c0bcbc"
          />
          <ButtonCalculadora
            onPress={delNumber}
            textColor="black"
            title="del"
            backgroundColor="#c0bcbc"
          />
          <ButtonCalculadora
            onPress={() => operationCal(OperationsEnum.div)}
            title="/"
            backgroundColor="#FF9427"
          />
        </View>
        <View style={styles.containerRow}>
          <ButtonCalculadora onPress={addNumber} title="7" />
          <ButtonCalculadora onPress={addNumber} title="8" />
          <ButtonCalculadora onPress={addNumber} title="9" />
          <ButtonCalculadora
            onPress={() => operationCal(OperationsEnum.mul)}
            title="X"
            backgroundColor="#FF9427"
          />
        </View>
        <View style={styles.containerRow}>
          <ButtonCalculadora onPress={addNumber} title="4" />
          <ButtonCalculadora onPress={addNumber} title="5" />
          <ButtonCalculadora onPress={addNumber} title="6" />
          <ButtonCalculadora
            onPress={() => operationCal(OperationsEnum.res)}
            title="-"
            backgroundColor="#FF9427"
          />
        </View>
        <View style={styles.containerRow}>
          <ButtonCalculadora onPress={addNumber} title="1" />
          <ButtonCalculadora onPress={addNumber} title="2" />
          <ButtonCalculadora onPress={addNumber} title="3" />
          <ButtonCalculadora
            onPress={() => operationCal(OperationsEnum.sum)}
            title="+"
            backgroundColor="#FF9427"
          />
        </View>
        <View style={styles.containerRow}>
          <ButtonCalculadora onPress={addNumber} title="0" with={180} />
          <ButtonCalculadora onPress={addNumber} title="." />
          <ButtonCalculadora
            onPress={resultCal}
            title="="
            backgroundColor="#FF9427"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
