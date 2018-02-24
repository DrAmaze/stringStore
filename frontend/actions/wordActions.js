import * as ApiUtil from '../util/wordApiUtil';

export const RECEIVE_WORDS = 'RECEIVE_WORDS';
export const RECEIVE_WORD = 'RECEIVE_WORD';

const receiveWords = words => ({
  type: RECEIVE_WORDS,
  words
});

const receiveWord = word => ({
  type: RECEIVE_WORD,
  word
});

export const fetchWords = () => dispatch => (
  ApiUtil.fetchWords().then(words => (
    dispatch(receiveWords(words))
  ))
);

export const fetchWord = id => dispatch => (
  ApiUtil.fetchWord(id).then(word => (
    dispatch(receiveWord(word))
  ))
);

export const createWord = word => dispatch => (
  ApiUtil.createWord(word).then(term => (
    dispatch(receiveWord(term))
  ))
);
