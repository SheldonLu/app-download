// routes.js
import React from 'react';
import { Router,Route, IndexRoute ,browserHistory} from 'react-router';

import HelloMessage from './index/index'


module.exports = (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={HelloMessage } />
    </Route>
  </Router>)
