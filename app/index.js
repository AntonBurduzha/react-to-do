import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/react-toggle-switch/dist/css/switch.min.css"
import './styles/style.scss'

import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import store from './store'
import App from './containers/index'

window.onload = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};