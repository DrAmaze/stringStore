import { ajax } from 'jquery';

export const fetchWords = () => (
  ajax({
    method: 'GET',
    url: 'api/word'
  })
);

export const fetchWord = id => (
  ajax({
    method: 'GET',
    url: `api/word/${id}`
  })
);

export const createWord = word => (
  ajax({
    method: 'POST',
    url: 'api/word',
    data: word
  })
);

export const deleteWord = dataId => (
  ajax({
    method: 'DELETE',
    url: `api/word/${dataId}`
  })
);
