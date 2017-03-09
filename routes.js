// routes.js
import React from 'react';
import { Router,Route, IndexRoute ,browserHistory} from 'react-router';

import ButtonSize from './index/index'
import ButtonSize2 from './index/test'


module.exports = (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={ButtonSize } />
      <Route path="a" component = {ButtonSize2}></Route>
    </Route>
  </Router>)
