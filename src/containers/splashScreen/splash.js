import React, {Component} from 'react';
import {View, Text, StatusBar, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {navigationReset} from '../../services/navigationServices';
import {getNewsByCategory} from '../../services/fetchNewsByCategory';
import {articleActions} from '../../redux/actions';

import styles from './style';

class Splash extends Component {
  async componentDidMount() {
    //Fetch articles to set redux at the beginning
    const generalArticlesList = await getNewsByCategory('General', 1);
    const businessArticlesList = await getNewsByCategory('Business', 1);
    const entertainmentArticlesList = await getNewsByCategory(
      'Entertainment',
      1,
    );
    const healthArticlesList = await getNewsByCategory('Health', 1);
    const scienceArticlesList = await getNewsByCategory('Science', 1);
    const sportsArticlesList = await getNewsByCategory('Sports', 1);
    const technologyArticlesList = await getNewsByCategory('Technology', 1);
    this.props.saveGeneralArticles(generalArticlesList);
    this.props.saveBusinessArticles(businessArticlesList);
    this.props.saveEntertainmentArticles(entertainmentArticlesList);
    this.props.saveHealthArticles(healthArticlesList);
    this.props.saveScienceArticles(scienceArticlesList);
    this.props.saveSportsArticles(sportsArticlesList);
    this.props.saveTechnologyArticles(technologyArticlesList);
    navigationReset('main', {
      generalArticles: generalArticlesList,
      businessArticles: businessArticlesList,
      entertainmentArticles: entertainmentArticlesList,
      healthArticles: healthArticlesList,
      scienceArticles: scienceArticlesList,
      sportsArticles: sportsArticlesList,
      technologyArticles: technologyArticlesList,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={'red'} />
        <Text style={styles.welcomeText}>Welcome to the NEWS</Text>
        <Text style={styles.loadingText}>Loading...</Text>
        <ActivityIndicator size="large" color="white" />
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

const mapDispatchToProps = (dispatch) => ({
  saveGeneralArticles: (article) =>
    dispatch(articleActions.saveGeneralArticles(article)),
  saveBusinessArticles: (article) =>
    dispatch(articleActions.saveBusinessArticles(article)),
  saveEntertainmentArticles: (article) =>
    dispatch(articleActions.saveEntertainmentArticles(article)),
  saveHealthArticles: (article) =>
    dispatch(articleActions.saveHealthArticles(article)),
  saveScienceArticles: (article) =>
    dispatch(articleActions.saveScienceArticles(article)),
  saveSportsArticles: (article) =>
    dispatch(articleActions.saveSportsArticles(article)),
  saveTechnologyArticles: (article) =>
    dispatch(articleActions.saveTechnologyArticles(article)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
