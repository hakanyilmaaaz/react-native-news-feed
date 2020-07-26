export const articleTypes = {
  SAVE_GENERAL_ARTICLES: 'save_general_articles',
  SAVE_BUSINESS_ARTICLES: 'save_business_articles',
  SAVE_ENTERTAINMENT_ARTICLES: 'save_entertainment_articles',
  SAVE_HEALTH_ARTICLES: 'save_health_articles',
  SAVE_SCIENCE_ARTICLES: 'save_science_articles',
  SAVE_SPORTS_ARTICLES: 'save_sports_articles',
  SAVE_TECHNOLOGY_ARTICLES: 'save_technology_articles',
};

const saveGeneralArticles = (generalArticles) => {
  return {
    type: articleTypes.SAVE_GENERAL_ARTICLES,
    payload: generalArticles,
  };
};

const saveBusinessArticles = (businessArticles) => {
  return {
    type: articleTypes.SAVE_BUSINESS_ARTICLES,
    payload: businessArticles,
  };
};

const saveEntertainmentArticles = (entertainmentArticles) => {
  return {
    type: articleTypes.SAVE_ENTERTAINMENT_ARTICLES,
    payload: entertainmentArticles,
  };
};

const saveHealthArticles = (healthArticles) => {
  return {
    type: articleTypes.SAVE_HEALTH_ARTICLES,
    payload: healthArticles,
  };
};

const saveScienceArticles = (scienceArticles) => {
  return {
    type: articleTypes.SAVE_SCIENCE_ARTICLES,
    payload: scienceArticles,
  };
};

const saveSportsArticles = (sportsArticles) => {
  return {
    type: articleTypes.SAVE_SPORTS_ARTICLES,
    payload: sportsArticles,
  };
};

const saveTechnologyArticles = (technologyArticles) => {
  return {
    type: articleTypes.SAVE_TECHNOLOGY_ARTICLES,
    payload: technologyArticles,
  };
};

export const articleActions = {
  saveGeneralArticles: saveGeneralArticles,
  saveBusinessArticles: saveBusinessArticles,
  saveEntertainmentArticles: saveEntertainmentArticles,
  saveHealthArticles: saveHealthArticles,
  saveScienceArticles: saveScienceArticles,
  saveSportsArticles: saveSportsArticles,
  saveTechnologyArticles: saveTechnologyArticles,
};
