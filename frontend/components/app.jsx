import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Link,
  HashRouter
} from 'react-router-dom';

import WordIndex from './wordIndexContainer';

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

const App = () => (
  <div>
    <Route component={ScrollToTop} />
    <Route path='/word' component={ WordIndex } />
  </div>
);

export default App;
