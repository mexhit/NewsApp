import axios, {AxiosResponse} from 'axios';
import {Article, ResponseObject} from '../types/Article';

const API_KEY = '26e784918c83446fa83df0edaeb81d56';

const BASE_URL = 'https://newsapi.org/v2';

export const getArticleList = (): Promise<Article[]> => {
  return axios
    .get(BASE_URL + '/everything', {
      params: {
        apiKey: API_KEY,
        q: 'tech',
      },
    })
    .then((response: AxiosResponse<ResponseObject>) => {
      return response.data.articles;
    });
};

export const searchArticles = (title: string): Promise<Article[]> => {
  return axios
    .get(BASE_URL + '/everything', {
      params: {
        apiKey: API_KEY,
        qInTitle: title,
      },
    })
    .then((response: AxiosResponse<ResponseObject>) => {
      return response.data.articles;
    });
};
