import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {abs} from 'react-native-reanimated';

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
  scrollView: {
    flex: 92,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: hp(2.5),
    color: 'white',
  },
  articleView: {
    height: hp(40),
    width: wp(90),
    overflow: 'hidden',
    marginVertical: hp(1),
  },
  articleText: {
    fontSize: hp(1.75),
    color: 'grey',
    marginTop: hp(0.75),
  },
  clickText: {
    fontSize: hp(1.75),
    color: 'red',
    textDecorationLine: 'underline',
  },
  articlePhoto: {
    height: hp(25),
    width: wp(90),
    resizeMode: 'stretch',
  },
  shadowView: {
    height: hp(25),
    width: wp(90),
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: hp(3),
    borderTopRightRadius: hp(3),
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  articleTitleView: {
    height: hp(20),
    width: wp(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
  articleTitle: {
    fontSize: hp(2),
    color: 'white',
    textAlign: 'center',
  },
  textsView: {
    height: hp(15),
    width: wp(90),
    borderLeftWidth: hp(0.6),
    borderRightWidth: hp(0.6),
    borderBottomWidth: hp(0.6),
    borderColor: 'red',
    borderBottomLeftRadius: hp(3),
    borderBottomRightRadius: hp(3),
    alignItems: 'center',
    backgroundColor: 'white',
  },
  sourceAndDateView: {
    height: hp(3.5),
    width: wp(80),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  descriptionView: {
    height: hp(10),
    width: wp(80),
    justifyContent: 'flex-start',
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
  removeButtonView: {
    position: 'absolute',
    bottom: hp(18),
    left: wp(75),
    height: hp(5),
    width: hp(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButton: {
    height: hp(3.3),
    width: hp(3.3),
  },
  emptyListText: {
    fontSize: hp(2.5),
    color: 'red',
    textAlign: 'center',
  },
});
