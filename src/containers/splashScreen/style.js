import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  welcomeText: {
    fontSize: hp(5),
    color: 'white',
    textAlign: 'center',
  },
  loadingText: {
    fontSize: hp(3),
    color: 'white',
    marginTop: hp(2),
  },
});
