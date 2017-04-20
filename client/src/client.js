import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Homepage from './components/Homepage';
import Welcome from './components/Welcome';
import About from './components/About';

import Archive from './components/Archive';
import BooksContainer from './components/BooksContainer';
import AddBookContainer from './components/AddBookContainer';

filepicker.setKey('AlQMzdU6vSnemCoSeEhy3z');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Homepage}>
      <IndexRoute component={Welcome} />
      <Route path="/about" component={About} />
    </Route>
    <Route path="/games" component={Archive}>
      <IndexRoute component={BooksContainer} />
      <Route path="/games/add" component={AddBookContainer} />
    </Route>
  </Router>,
  document.getElementById('root')
);
