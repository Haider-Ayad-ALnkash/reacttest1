import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reminders from './components/Reducer';

const store=createStore(reminders);

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}><App/></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
