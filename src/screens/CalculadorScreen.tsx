import React, {useState} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {ButtonCalculadora} from '../components/ButtonCalculadora';
import {styles} from '../theme/CalculadoraTheme';

export const CalculadoraScreen = () => {
  const [numberOne, setNumberOne] = useState('0');
  const [numberTwo, setNumberTwo] = useState('');
  const [signo, setSigno] = useState('');

  function addNumber(pressNumber: string) {
    if (pressNumber === '.' && numberOne.includes('.')) {
      return;
    }
    if (pressNumber === '0' && numberOne === '0') {
      setNumberOne(pressNumber);
    } else if (pressNumber === '.' && numberOne.startsWith('0')) {
      setNumberOne('0.');
    } else if (pressNumber !== '0' && numberOne === '0') {
      setNumberOne(pressNumber);
    } else {
      setNumberOne(numberOne + pressNumber);
    }
  }

  function operationCal(operation: string) {
    setSigno(operation);
    setNumberTwo(numberOne);
    setNumberOne('0');
  }

  function clearNumber() {
    setNumberOne('0');
    setNumberTwo('');
    setSigno('');
  }

  function changeType() {
    if (numberOne === '0') {
      return;
    }
    if (numberOne.includes('-')) {
      setNumberOne(numberOne.replace('-', ''));
    } else {
      setNumberOne('-' + numberOne);
    }
  }

  function resultCal() {
    const one = Number.parseFloat(numberOne);
    const two = Number.parseFloat(numberTwo);
    if (signo === 'x') {
      const res = two * one;
      setNumberOne(`${res}`);
    } else if (signo === '/') {
      const res = two / one;
      setNumberOne(`${res}`);
    } else if (signo === '-') {
      const res = two - one;
      setNumberOne(`${res}`);
    } else {
      const res = two + one;
      setNumberOne(`${res}`);
    }

    setNumberTwo('');
    setSigno('');
  }

  return (
    <SafeAreaView style={styles.containerGlobal}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.containerCalculadora}>
        <Text
          style={styles.textResultOne}
          numberOfLines={1}
          adjustsFontSizeToFit={true}>
          {numberTwo}
        </Text>
        <Text style={styles.textSigno}>{signo}</Text>
        <Text
          style={styles.textResultTwo}
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
            onPress={() => operationCal('%')}
            textColor="black"
            title="%"
            backgroundColor="#c0bcbc"
          />
          <ButtonCalculadora
            onPress={() => operationCal('/')}
            title="/"
            backgroundColor="#FF9427"
          />
        </View>
        <View style={styles.containerRow}>
          <ButtonCalculadora onPress={addNumber} title="7" />
          <ButtonCalculadora onPress={addNumber} title="8" />
          <ButtonCalculadora onPress={addNumber} title="9" />
          <ButtonCalculadora
            onPress={() => operationCal('x')}
            title="X"
            backgroundColor="#FF9427"
          />
        </View>
        <View style={styles.containerRow}>
          <ButtonCalculadora onPress={addNumber} title="4" />
          <ButtonCalculadora onPress={addNumber} title="5" />
          <ButtonCalculadora onPress={addNumber} title="6" />
          <ButtonCalculadora
            onPress={() => operationCal('-')}
            title="-"
            backgroundColor="#FF9427"
          />
        </View>
        <View style={styles.containerRow}>
          <ButtonCalculadora onPress={addNumber} title="1" />
          <ButtonCalculadora onPress={addNumber} title="2" />
          <ButtonCalculadora onPress={addNumber} title="3" />
          <ButtonCalculadora
            onPress={() => operationCal('+')}
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
