import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Link,
  HashRouter
} from 'react-router-dom';

import WordIndex from './index/wordIndexContainer';
import WordForm from './form/wordFormContainer';

// This function ensures the user is at the top of the page when navigating to another page
const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

const App = () => (
  <div>
    <Route component={ScrollToTop} />

    <Route path='/words' component={ WordIndex } />
    <Route path='/new' component={ WordForm } />
  </div>
);

export default App;
