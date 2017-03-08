// routes.js
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import HelloMessage from './index/index'

module.exports = (
  <Route path="/">
    <IndexRoute component={HelloMessage} />
  </Route>
);
