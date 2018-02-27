import merge from 'lodash/merge';

import {
  RECEIVE_WORDS,
  RECEIVE_WORD,
  REMOVE_WORD
} from '../actions/wordActions';

const wordsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_WORDS:
      return merge({}, action.bookings);
    case RECEIVE_WORD:
      return merge({}, state, {[action.booking.id]: action.booking});
    // case REMOVE_WORD:
    //   newState = merge({}, state);
    //   delete newState[action.booking.id];
    //   return newState;
    default:
      return state;
  }
};

export default wordsReducer;
