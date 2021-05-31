import React from 'react';
import ReactDOM from 'react-dom';
import App from './layouts/App';
import reportWebVitals from './reportWebVitals';
import {Router} from "@reach/router";
import 'assets/css/mosala-web.css'
import '@fontsource/roboto';

ReactDOM.render(
  <Router>
    <App path={"/"} />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
