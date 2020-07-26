import React, {Component} from 'react';
import {View, StatusBar, FlatList, AsyncStorage, Text} from 'react-native';
import {
  SCENE_KEYS,
  navigationPush,
  navigationReset,
} from '../../services/navigationServices';

import styles from './style';

import Header from '../../components/header';
import Article from '../../components/article';

export default class Favourites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favouritesList: [],
    };
  }

  componentDidMount() {
    this.getFavouritesList();
  }

  getFavouritesList = async () => {
    try {
      const favouritesString = await AsyncStorage.getItem('favouritesList');
      if (favouritesString !== null) {
        this.setState({
          bookMarksStatus: 1,
          favouritesList: JSON.parse(favouritesString),
        });
      } else {
        this.setState({
          bookMarksStatus: 2,
        });
      }
    } catch (error) {
      this.setState({
        bookMarksStatus: 2,
      });
    }
  };

  onRemovePress = async (url) => {
    var index;
    for (var i = 0; i < this.state.favouritesList.length; i++) {
      if (this.state.favouritesList[i].url === url) {
        index = i;
      }
    }
    var tempList = [...this.state.favouritesList];
    tempList.splice(index, 1);
    this.setState({favouritesList: tempList});
    try {
      const favouritesString = JSON.stringify(tempList);
      await AsyncStorage.setItem('favouritesList', favouritesString);
    } catch (error) {
      console.log('unable to remove favourite');
    }
  };

  onBackButtonPress = () => {
    navigationReset('main', {
      currentCategory: this.props.currentCategory,
    });
  };

  onReadPress = (img, source, date, title, description, url) => {
    navigationPush(SCENE_KEYS.screens.details, {
      img: img,
      source: source,
      date: date,
      title: title,
      description: description,
      url: url,
      from: 'favouritesScreen',
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={'red'} />
        <Header
          headerText={'Favourites'}
          backButtonStatus={true}
          favouriteButtonOnHeader={false}
          favouriteButtonStatus={false}
          onBackButtonPress={this.onBackButtonPress}
        />
        <View style={styles.scrollView}>
          {Object.keys(this.state.favouritesList).length === 0 ? (
            <Text style={styles.emptyListText}>
              Your favourites list is empty :(
            </Text>
          ) : (
            <FlatList
              ref={(ref) => {
                this.flatListRef = ref;
              }}
              data={this.state.favouritesList}
              showsVerticalScrollIndicator={false}
              inverted={true}
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'flex-end',
              }}
              extraData={this.state.favouritesList}
              renderItem={({item, index}) => {
                return (
                  <Article
                    imageUrl={item.img}
                    title={item.title}
                    source={item.source}
                    publishedAt={item.date}
                    description={item.description}
                    onPressRead={() =>
                      this.onReadPress(
                        item.img,
                        item.source,
                        item.date,
                        item.title,
                        item.description,
                        item.url,
                      )
                    }
                    onPressRemove={() => this.onRemovePress(item.url)}
                  />
                );
              }}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
        </View>
      </View>
    );
  }
}
