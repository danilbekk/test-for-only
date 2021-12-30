import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/App';
import { GlobalProvider } from './app/GlobalProvider';

ReactDOM.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
  document.getElementById('root'),
);
