import React, {useRef, useState} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {ButtonCalculadora} from '../components/ButtonCalculadora';
import {styles} from '../theme/CalculadoraTheme';

enum OperationsEnum {
  sum,
  res,
  mul,
  div,
}

export const CalculadoraScreen = () => {
  const [numberOne, setNumberOne] = useState('0');
  const [numberTwo, setNumberTwo] = useState('');

  const operationRef = useRef<OperationsEnum>();

  const signo = useRef('');

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

  function operationCal(operationSelect: OperationsEnum) {
    if (numberOne.endsWith('.')) {
      return;
    }
    if (numberOne === '0') {
      return;
    }

    if (numberOne !== '0' && numberTwo !== '') {
      return;
    }

    operationRef.current = operationSelect;

    switch (operationRef.current) {
      case OperationsEnum.mul: {
        signo.current = 'x';
        break;
      }
      case OperationsEnum.div: {
        signo.current = '/';
        break;
      }
      case OperationsEnum.res: {
        signo.current = '-';
        break;
      }
      default: {
        signo.current = '+';
      }
    }
    setNumberTwo(numberOne);
    setNumberOne('0');
  }

  function clearNumber() {
    setNumberOne('0');
    setNumberTwo('');
    signo.current = '';
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

  function delNumber() {
    const cant = numberOne.length;
    if (cant === 1) {
      setNumberOne('0');
    } else if (cant === 2 && numberOne.startsWith('-')) {
      setNumberOne('0');
    } else {
      const newNumber = numberOne.substring(0, cant - 1);
      setNumberOne(`${newNumber}`);
    }
  }

  function resultCal() {
    const one = Number.parseFloat(numberOne);
    const two = Number.parseFloat(numberTwo);

    switch (operationRef.current) {
      case OperationsEnum.mul: {
        const res = two * one;
        setNumberOne(`${res}`);
        break;
      }
      case OperationsEnum.div: {
        if (one === 0) {
          return;
        }
        const res = two / one;
        setNumberOne(`${res}`);
        break;
      }
      case OperationsEnum.res: {
        const res = two - one;
        setNumberOne(`${res}`);
        break;
      }
      default: {
        const res = two + one;
        setNumberOne(`${res}`);
        break;
      }
    }

    setNumberTwo('');
    signo.current = '';
  }

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
          <Text style={styles.textSigno}>{signo.current}</Text>
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
