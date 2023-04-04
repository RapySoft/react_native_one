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
    marginTop: 10,
    justifyContent: 'space-between',
  },
  textResultOne: {
    color: 'white',
    fontSize: 30,
  },
  textSigno: {
    color: 'white',
    fontSize: 10,
  },
  textResultTwo: {
    color: 'white',
    fontSize: 50,
  },
});
