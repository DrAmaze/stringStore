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

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

const App = () => (
  <div>
    <Route component={ScrollToTop} />
    <Redirect from='/' to='/words' />
    <Route path='/words' component={ WordIndex } />
    <Route path='/new' component={ WordForm } />
  </div>
);

export default App;
