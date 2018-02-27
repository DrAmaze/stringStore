import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const WordIndexItem = ({ word }) => (
  <li className="word-index-item">
    <h3>{ word }</h3>
  </li>
);

export default withRouter(WordIndexItem);
