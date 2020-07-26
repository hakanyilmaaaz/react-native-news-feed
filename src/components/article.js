import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
  Image,
} from 'react-native';
import moment from 'moment';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import REMOVE_BUTTON from '../assets/removeButton.png';

export default Article = ({
  prevRead,
  imageUrl,
  title,
  source,
  publishedAt,
  description,
  onPressRead,
  onPressRemove,
}) => {
  return (
    <TouchableOpacity style={styles.articleView} onPress={onPressRead}>
      <ImageBackground
        source={{uri: imageUrl}}
        style={styles.articlePhoto}
        imageStyle={{
          borderTopLeftRadius: hp(3),
          borderTopRightRadius: hp(3),
        }}>
        <View style={styles.shadowView}>
          {onPressRemove != null ? (
            <TouchableOpacity
              onPress={onPressRemove}
              style={styles.removeButtonView}>
              <Image source={REMOVE_BUTTON} style={styles.removeButton} />
            </TouchableOpacity>
          ) : null}

          <View style={styles.articleTitleView}>
            <Text style={styles.articleTitle}>{title}</Text>
          </View>
        </View>
      </ImageBackground>
      <View
        style={[
          styles.textsView,
          {borderColor: prevRead === true ? 'green' : 'red'},
        ]}>
        <View style={styles.sourceAndDateView}>
          <Text>{source}</Text>
          <Text>{moment(publishedAt).fromNow()}</Text>
        </View>
        <View style={styles.descriptionView}>
          <Text style={styles.articleText} numberOfLines={3}>
            {description}
          </Text>
          <TouchableOpacity onPress={onPressRead}>
            {prevRead === true ? (
              <Text style={[styles.clickText, {color: 'green'}]}>
                read again >>
              </Text>
            ) : (
              <Text style={styles.clickText}>read more >></Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
});
