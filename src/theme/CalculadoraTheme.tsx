import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerGlobal: {
    flex: 1,
    backgroundColor: 'black',
  },
  containerCalculadora: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  containerRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textResultOne: {
    color: 'white',
    fontSize: 30,
  },
  textResultTwo: {
    color: 'white',
    fontSize: 50,
  },
});
