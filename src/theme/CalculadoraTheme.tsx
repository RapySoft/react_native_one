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
    justifyContent: 'space-around',
  },
  containerRowSigno: {
    flexDirection: 'row',
  },
  textResultOne: {
    color: 'white',
    fontSize: 50,
    marginEnd: 10,
  },
  textResultTwo: {
    color: '#989898',
    fontSize: 30,
    marginEnd: 10,
  },
  textSigno: {
    color: '#989898',
    fontSize: 30,
    marginEnd: 10,
  },
});
