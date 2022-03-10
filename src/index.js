import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { WatchListContextProvider } from './Context/Context';

ReactDOM.render(
  <BrowserRouter>
    <WatchListContextProvider>
      <App />
    </WatchListContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
