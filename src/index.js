import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './globalStyle';
import App from './Pages/App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
