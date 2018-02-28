import merge from 'lodash/merge';

import {
  RECEIVE_WORDS,
  RECEIVE_WORD,
  REMOVE_WORD
} from '../actions/wordActions';

const wordsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_WORDS:
      return action.words;
    case RECEIVE_WORD:
      return [...state, action.word];

    // The following action enables user to delete words

    // case REMOVE_WORD:
    //   newState = merge({}, state);
    //   delete newState[action.booking.id];
    //   return newState;
    default:
      return state;
  }
};

export default wordsReducer;
