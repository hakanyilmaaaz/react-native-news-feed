import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  AsyncStorage,
} from 'react-native';
import {SCENE_KEYS, navigationReset} from '../../services/navigationServices';
import {WebView} from 'react-native-webview';

import styles from './style';

import BACK_BUTTON from '../../assets/backButton.png';
import FAVOURITES_BUTTON from '../../assets/likeButton.png';
import EMPTY_FAVOURITES_BUTTON from '../../assets/emptyLikeButton.png';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favouritesList: [],
      favouriteStatus: false,
    };
  }

  async componentDidMount() {
    await this.getFavouritesList();
    this.checkFavouriteStatus();
  }

  getFavouritesList = async () => {
    try {
      const favouritesString = await AsyncStorage.getItem('favouritesList');
      if (favouritesString !== null) {
        this.setState({
          favouritesList: JSON.parse(favouritesString),
        });
      }
    } catch (error) {
      console.log('Unable to get list');
    }
  };

  checkFavouriteStatus = () => {
    for (var i = 0; i < this.state.favouritesList.length; i++) {
      if (this.state.favouritesList[i].url === this.props.url) {
        this.setState({
          favouriteStatus: true,
        });
      }
    }
  };

  onBackButtonPress = () => {
    if (this.props.from === 'homeScreen') {
      navigationReset('main', {
        currentCategory: this.props.currentCategory,
      });
    } else navigationReset(SCENE_KEYS.screens.favourites, {});
  };

  onfavouritePress = async (img, source, date, title, description, url) => {
    var alreadySaved = false;
    var index;
    for (var i = 0; i < this.state.favouritesList.length; i++) {
      if (this.state.favouritesList[i].url === url) {
        alreadySaved = true;
        index = i;
      }
    }
    if (alreadySaved === false) {
      this.state.favouritesList.push({
        img: img,
        source: source,
        date: date,
        title: title,
        description: description,
        url: url,
      });
      try {
        const favouritesString = JSON.stringify(this.state.favouritesList);
        await AsyncStorage.setItem('favouritesList', favouritesString);
        this.setState({
          favouriteStatus: true,
        });
      } catch (error) {
        console.log('unable to add favourites');
      }
    } else {
      var tempList = [...this.state.favouritesList];
      tempList.splice(index, 1);
      this.setState({favouritesList: tempList});
      try {
        const favouritesString = JSON.stringify(tempList);
        await AsyncStorage.setItem('favouritesList', favouritesString);
        this.setState({
          favouriteStatus: false,
        });
      } catch (error) {
        console.log('unable to remove favourite');
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={'red'} />
        <Header
          headerText={this.props.source}
          backButtonStatus={true}
          favouriteButtonOnHeader={true}
          favouriteButtonStatus={this.state.favouriteStatus}
          onBackButtonPress={this.onBackButtonPress}
          onFavouritePress={() =>
            this.onfavouritePress(
              this.props.img,
              this.props.source,
              this.props.date,
              this.props.title,
              this.props.description,
              this.props.url,
            )
          }
        />
        <View style={styles.webViewContainer}>
          <WebView source={{uri: this.props.url}} style={styles.webView} />
        </View>
      </View>
    );
  }
}
