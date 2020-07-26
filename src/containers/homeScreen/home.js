import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  StatusBar,
  FlatList,
  AsyncStorage,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import moment from 'moment';
import {SCENE_KEYS, navigationReplace} from '../../services/navigationServices';

import Header from '../../components/header';
import Article from '../../components/article';

import styles from './style';

import {getNewsByCategory} from '../../services/fetchNewsByCategory';
import {getNewsBySearch} from '../../services/fetchNewsBySearch';

const categories = [
  {
    category: 'Search',
  },
  {
    category: 'General',
  },
  {
    category: 'Business',
  },
  {
    category: 'Entertainment',
  },
  {
    category: 'Health',
  },
  {
    category: 'Science',
  },
  {
    category: 'Sports',
  },
  {
    category: 'Technology',
  },
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: categories,
      selectedCategory: 'General',
      articles: this.props.generalArticles,
      refreshing: false,
      prevReadList: [],
      searchText: '',
      getMoreArticles: false,
      page: 1,
    };
  }

  async componentDidMount() {
    this.getPrevReadList();
    if (this.props.currentCategory) {
      await this.setState({selectedCategory: this.props.currentCategory});
    }
    this.onCategoryPress(this.state.selectedCategory);
  }

  //Get previously read articles
  getPrevReadList = async () => {
    try {
      const prevReadString = await AsyncStorage.getItem('prevReadList');
      if (prevReadString !== null) {
        this.setState({
          prevReadList: JSON.parse(prevReadString),
        });
      }
    } catch (error) {
      console.log('Unable to get prevReadList');
    }
  };

  onLayzLoading = async () => {
    await this.setState({
      getMoreArticles: true,
      page: this.state.page + 1,
    });
    if (this.state.selectedCategory === 'Search') {
      getNewsBySearch(this.state.searchText, this.state.page)
        .then((newArticles) =>
          this.setState({
            articles: this.state.articles.concat(newArticles),
            getMoreArticles: false,
          }),
        )
        .catch(() => this.setState({getMoreArticles: false}));
    } else {
      getNewsByCategory(this.state.selectedCategory, this.state.page)
        .then((newArticles) =>
          this.setState({
            articles: this.state.articles.concat(newArticles),
            getMoreArticles: false,
          }),
        )
        .catch(() => this.setState({getMoreArticles: false}));
    }
  };

  onRefresh = () => {
    this.setState({
      refreshing: true,
    });
    if (this.state.selectedCategory === 'Search') {
      this.onSearchNews();
    } else
      getNewsByCategory(this.state.selectedCategory, 1)
        .then((articles) => this.setState({articles, refreshing: false}))
        .catch(() => this.setState({refreshing: false}));
  };

  onCategoryPress = async (item) => {
    this.setState({selectedCategory: item, page: 1});
    switch (item) {
      case 'Search':
        this.setState({articles: []});
        break;
      case 'General':
        await this.setState({articles: this.props.generalArticles});
        this.articlesListRef.scrollToIndex({animated: false, index: 0});
        break;
      case 'Business':
        await this.setState({articles: this.props.businessArticles});
        this.articlesListRef.scrollToIndex({animated: false, index: 0});
        break;
      case 'Entertainment':
        await this.setState({articles: this.props.entertainmentArticles});
        this.articlesListRef.scrollToIndex({animated: false, index: 0});
        break;
      case 'Health':
        await this.setState({articles: this.props.healthArticles});
        this.articlesListRef.scrollToIndex({animated: false, index: 0});
        break;
      case 'Science':
        await this.setState({articles: this.props.scienceArticles});
        this.articlesListRef.scrollToIndex({animated: false, index: 0});
        break;
      case 'Sports':
        await this.setState({articles: this.props.sportsArticles});
        this.articlesListRef.scrollToIndex({animated: false, index: 0});
        break;
      case 'Technology':
        await this.setState({articles: this.props.technologyArticles});
        this.articlesListRef.scrollToIndex({animated: false, index: 0});
        break;
    }
  };

  onSearchNews = () => {
    if (this.state.searchText === '') return;
    if (this.state.searchText.length > 2) {
      getNewsBySearch(this.state.searchText, this.state.page)
        .then((articles) => this.setState({articles, refreshing: false}))
        .catch(() => this.setState({refreshing: false}));
      return;
    }
  };

  onFavouritesPress = () => {
    navigationReplace(SCENE_KEYS.screens.favourites, {
      currentCategory: this.state.selectedCategory,
    });
  };

  onReadPress = async (img, source, date, title, description, url) => {
    this.state.prevReadList.push({
      url: url,
    });
    try {
      const prevReadString = JSON.stringify(this.state.prevReadList);
      await AsyncStorage.setItem('prevReadList', prevReadString);
    } catch (error) {
      console.log('unable to add prevReadList');
    }
    navigationReplace(SCENE_KEYS.screens.details, {
      img: img,
      source: source,
      date: date,
      title: title,
      description: description,
      url: url,
      from: 'homeScreen',
      currentCategory: this.state.selectedCategory,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={'red'} />
        <Header
          headerText={'Home'}
          backButtonStatus={false}
          favouriteButtonOnHeader={true}
          favouriteButtonStatus={true}
          onFavouritePress={this.onFavouritesPress}
        />
        <View style={styles.categoriesSlider}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={this.state.categories}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => this.onCategoryPress(item.category)}>
                  <View
                    style={[
                      styles.categoriesTextView,
                      {
                        backgroundColor:
                          this.state.selectedCategory === item.category
                            ? 'red'
                            : 'white',
                        borderColor:
                          this.state.selectedCategory === item.category
                            ? 'red'
                            : 'white',
                      },
                    ]}>
                    <Text
                      style={[
                        styles.categoryText,
                        {
                          color:
                            this.state.selectedCategory === item.category
                              ? 'white'
                              : 'red',
                        },
                      ]}>
                      {item.category}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
            extraData={this.state}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={styles.scrollView}>
          {this.state.selectedCategory === 'Search' ? (
            <View style={styles.textInputView}>
              <TextInput
                allowFontScaling={false}
                placeholder="Search news (3-10 characters)"
                maxLength={10}
                returnKeyType="search"
                onChangeText={(text) => this.setState({searchText: text})}
                onSubmitEditing={this.onSearchNews}
              />
            </View>
          ) : null}
          <FlatList
            ref={(ref) => {
              this.articlesListRef = ref;
            }}
            data={this.state.articles}
            showsVerticalScrollIndicator={false}
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
            onEndReached={this.onLayzLoading}
            onEndReachedThreshold={0}
            renderItem={({item, index}) => {
              var prevRead = false;
              for (var i = 0; i < this.state.prevReadList.length; i++) {
                if (
                  item.url != null &&
                  this.state.prevReadList[i].url === item.url
                ) {
                  prevRead = true;
                }
              }
              return (
                <Article
                  prevRead={prevRead}
                  imageUrl={item.urlToImage}
                  title={item.title}
                  source={item.source.name}
                  publishedAt={item.publishedAt}
                  description={item.description}
                  onPressRead={() => {
                    this.onReadPress(
                      item.urlToImage,
                      item.source.name,
                      item.publishedAt,
                      item.title,
                      item.description,
                      item.url,
                    );
                  }}
                />
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
          {this.state.getMoreArticles === true ? (
            <ActivityIndicator size="large" color="red" />
          ) : null}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    generalArticles: state.articles.generalArticles,
    businessArticles: state.articles.businessArticles,
    entertainmentArticles: state.articles.entertainmentArticles,
    healthArticles: state.articles.healthArticles,
    scienceArticles: state.articles.scienceArticles,
    sportsArticles: state.articles.sportsArticles,
    technologyArticles: state.articles.technologyArticles,
  };
};

export default connect(mapStateToProps)(Home);
