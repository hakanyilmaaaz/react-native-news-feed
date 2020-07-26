import {createStore, combineReducers} from 'redux';
import articlesReducer from './articlesReducer';

export default () => {
  const rootReducer = combineReducers({
    articles: articlesReducer,
  });

  return createStore(rootReducer);
};
