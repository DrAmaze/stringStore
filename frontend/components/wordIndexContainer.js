import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import WordIndex from './wordIndex';
import {
  fetchWords,
  fetchWord,
  createWord
} from '../actions/wordActions';
import { createSelector } from 'reselect';
import values from 'lodash/values';

const wordSelector = createSelector(
  // state => state.values.words
);

const mapStateToProps = state => ({
  // words: wordSelector(state),
});

const mapDispatchToProps = dispatch => ({
  fetchWords: () => dispatch(fetchWords()),
  fetchWord: word => dispatch(fetchWord(word)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(WordIndex));
