import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import BACK_BUTTON from '../assets/backButton.png';
import FAVOURITES_BUTTON from '../assets/likeButton.png';
import EMPTY_FAVOURITES_BUTTON from '../assets/emptyLikeButton.png';

export default Header = ({
  headerText,
  backButtonStatus,
  favouriteButtonOnHeader,
  favouriteButtonStatus,
  onBackButtonPress,
  onFavouritePress,
}) => {
  return (
    <View style={styles.header}>
      {backButtonStatus === true ? (
        <View style={styles.backButtonView}>
          <TouchableOpacity onPress={onBackButtonPress}>
            <Image source={BACK_BUTTON} style={styles.backButton} />
          </TouchableOpacity>
        </View>
      ) : null}
      <Text style={styles.headerText}>{headerText}</Text>
      <View style={styles.favouritesButtonView}>
        {favouriteButtonOnHeader === true ? (
          <View>
            {favouriteButtonStatus === false ? (
              <TouchableOpacity onPress={onFavouritePress}>
                <Image
                  source={EMPTY_FAVOURITES_BUTTON}
                  style={styles.favouritesButton}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={onFavouritePress}>
                <Image
                  source={FAVOURITES_BUTTON}
                  style={styles.favouritesButton}
                />
              </TouchableOpacity>
            )}
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
