import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import App from './containers/index'

export default(
  <Router history={browserHistory}>
    <Route path='/' component={App} />
  </Router>
);