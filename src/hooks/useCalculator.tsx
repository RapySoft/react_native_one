import {useRef, useState} from 'react';

export enum OperationsEnum {
  sum,
  res,
  mul,
  div,
}

export const useCalculator = () => {
  const [numberOne, setNumberOne] = useState('0');
  const [numberTwo, setNumberTwo] = useState('');

  const operationRef = useRef<OperationsEnum>();

  const signoRef = useRef('');

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
        signoRef.current = 'x';
        break;
      }
      case OperationsEnum.div: {
        signoRef.current = '/';
        break;
      }
      case OperationsEnum.res: {
        signoRef.current = '-';
        break;
      }
      default: {
        signoRef.current = '+';
      }
    }
    setNumberTwo(numberOne);
    setNumberOne('0');
  }

  function clearNumber() {
    setNumberOne('0');
    setNumberTwo('');
    signoRef.current = '';
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

    if (signoRef.current === '') {
      return;
    }

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
    signoRef.current = '';
  }

  return {
    resultCal,
    delNumber,
    changeType,
    clearNumber,
    operationCal,
    addNumber,
    numberOne,
    numberTwo,
    signoRef,
  };
};
