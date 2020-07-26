import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    flex: 8,
    width: wp(100),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  headerText: {
    fontSize: hp(2.5),
    color: 'white',
  },
  webViewContainer: {
    flex: 92,
    width: wp(90),
    alignItems: 'center',
  },
  webView: {
    flex: 1,
    width: wp(100),
  },
  backButtonView: {
    position: 'absolute',
    height: hp(8),
    width: wp(100),
    justifyContent: 'center',
  },
  backButton: {
    height: hp(4),
    width: hp(2),
    marginLeft: wp(5.5),
  },
  favouritesButtonView: {
    position: 'absolute',
    height: hp(8),
    width: wp(100),
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  favouritesButton: {
    height: hp(4),
    width: hp(4),
    resizeMode: 'contain',
    marginRight: wp(5.5),
  },
});
