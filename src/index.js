import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import Provider from './context';
import './index.css';
import { inject } from '@vercel/analytics';
 
inject();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <App />
  </Provider>
);