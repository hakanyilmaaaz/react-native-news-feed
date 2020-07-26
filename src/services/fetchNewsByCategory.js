import {NEWSAPI_KEY} from '../config/index';

export async function getNewsByCategory(category, pageNumber) {
  const url =
    'https://newsapi.org/v2/top-headlines?country=us&page=' +
    pageNumber +
    '&pageSize=10&category=' +
    category +
    '&apiKey=' +
    NEWSAPI_KEY;
  let result = await fetch(url).then((response) => response.json());
  return result.articles;
}
