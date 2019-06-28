import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import user from './redux/reducers/users';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logActions } from './redux/middleware/logActions';
import { BrowserRouter } from 'react-router-dom';
import './normalize.css';
import 'antd/dist/antd.css';
import './main.css';
const store = createStore(
  user,
  composeWithDevTools(applyMiddleware(logActions))
);
const appElement = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </Provider>, appElement);

module.hot.accept();
