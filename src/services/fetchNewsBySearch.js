import {NEWSAPI_KEY} from '../config/index';

export async function getNewsBySearch(searchText, pageNumber) {
  const url =
    'https://newsapi.org/v2/everything?language=en&page=' +
    pageNumber +
    '&pageSize=10&q=' +
    searchText +
    '&apiKey=' +
    NEWSAPI_KEY;
  let result = await fetch(url).then((response) => response.json());
  return result.articles;
}
