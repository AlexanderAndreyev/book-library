import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Homepage from './components/Homepage';
import Welcome from './components/Welcome';
import About from './components/About';

filepicker.setKey('AlQMzdU6vSnemCoSeEhy3z');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Homepage}>
      <IndexRoute component={Welcome} />
      <Route path="/about" component={About} />
    </Route>
  </Router>,
  document.getElementById('root')
);
