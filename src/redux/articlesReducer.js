import {INITIAL_STATE} from './initialState';
import {articleTypes} from './actions';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case articleTypes.SAVE_GENERAL_ARTICLES:
      return {
        ...state,
        generalArticles: action.payload,
      };
    case articleTypes.SAVE_BUSINESS_ARTICLES:
      return {
        ...state,
        businessArticles: action.payload,
      };
    case articleTypes.SAVE_ENTERTAINMENT_ARTICLES:
      return {
        ...state,
        entertainmentArticles: action.payload,
      };
    case articleTypes.SAVE_HEALTH_ARTICLES:
      return {
        ...state,
        healthArticles: action.payload,
      };
    case articleTypes.SAVE_SCIENCE_ARTICLES:
      return {
        ...state,
        scienceArticles: action.payload,
      };
    case articleTypes.SAVE_SPORTS_ARTICLES:
      return {
        ...state,
        sportsArticles: action.payload,
      };
    case articleTypes.SAVE_TECHNOLOGY_ARTICLES:
      return {
        ...state,
        technologyArticles: action.payload,
      };
    default:
      return state;
  }
};
