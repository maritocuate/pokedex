import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {LangProvider} from './context/LangContext'

ReactDOM.render(
  <React.StrictMode>
    <LangProvider><App /></LangProvider>
  </React.StrictMode>,
  document.getElementById('root')
);