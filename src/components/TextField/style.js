import {StyleSheet} from 'react-native';
import THEME from '../../constants/colors';

export default styles = StyleSheet.create({
  containerStyle: {
    width: '95%',
    marginTop: 10,
    height: 40,
    alignSelf: 'center',
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  placeHolder: {
    color: THEME.BLACK,
    // position: 'absolute',
    marginTop: 2,
    fontSize: 10,
    paddingLeft: 15,
  },
  textInput: {
    height: 40,
    paddingLeft: 10,
  },
  extraPaddingDarkBorder: {
    borderColor: THEME.BLACK,
    // borderWidth: 2,
    // borderRadius: 5,
    width: '75%',
    left: 4,
  },
  placeholderText: {
    top: 9,
    fontSize: 17,
    // fontWeight: 'bold',
    color: THEME.BLACK,
    // marginBottom: 10,
  },
});
