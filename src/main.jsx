import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import store from './container/store';
import { Provider } from 'react-redux'

import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from './container/RTK/api/apiSlice';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ApiProvider api={apiSlice}>
      <App />
    </ApiProvider>
  </Provider>,
)
